import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { BmsApiService } from '../services/items.service';
import { Item } from '../modals/item';

import { Title }     from '@angular/platform-browser';

@Component({
    templateUrl: '/app/items/items.component.html',
})
export class ItemsComponent implements OnInit  {
    private items:Item[];
    private errorMessage:string;
    constructor(private itemService: BmsApiService, private router: Router, private titleService:Title) { }
    ngOnInit() {
        this.titleService.setTitle('BMS | Items');
        this.itemService.getItems()
                    .subscribe(
                        items => this.items = items,
                        error =>  this.errorMessage = <any>error);
    }
    gotoDetail(item: Item) { 
        let link = ['/item-detail', item.id ];
        this.router.navigate(link);
    }
    deleteItem(item:Item)
    {
        this.itemService.deleteItem(item).toPromise().then(items => {
            this.items=items;
            console.log(items);
        });
    }
    createItem() { 
        let item=new Item();
        let link = ['/item-detail'];
        this.router.navigate(link);
    }
    getSNo(index:number):number{
        return index + 1;
    }
    formClosed(item:Item)
    {
        console.log(item);
    }
}