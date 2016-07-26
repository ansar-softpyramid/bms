import { Component, EventEmitter, OnInit, Input, Output, OnDestroy } from '@angular/core';
import { NgForm }    from '@angular/common';

import { Router, ActivatedRoute } from '@angular/router';
import { BmsApiService } from '../services/items.service';
import { Item } from '../modals/item';
//Font Awesome -- Not working
import { FaComponent } from 'angular2-fontawesome/components';
import { Title }     from '@angular/platform-browser';


@Component({
    selector: 'item-detail',
    templateUrl: '/app/item-detail/item-form.component.html',
    directives: [FaComponent]
})

export class ItemDetailComponent implements OnInit, OnDestroy
{
    private item=new Item();
    private errorMessage:any;
    private sub: any;
    private title:string;
    @Output() 
    private close = new EventEmitter();
    constructor(private router: Router, 
                private bms_api: BmsApiService, 
                private titleService:Title,
                private route: ActivatedRoute) {}
    ngOnInit()
    {
        this.titleService.setTitle('BMS | Item Detail');
        this.sub= this.route.params.subscribe(params => {
            let id=params['id'];
            if(id!==undefined)
            {
                id=+id;
                this.title="Update item detail";
                this.bms_api.findItem(id).toPromise().then(item => this.item = item);
            }
            else
            {
                this.title="Create item detail";
                this.item=new Item();
            }
        });
    }
    saveItem(item: Item)
    {
        item.unit=item.unit.toUpperCase();
        if(item.id==null)
            this.bms_api.saveItem(item).toPromise().then(item => {
                this.item=item;
                this.goBack(item);
            });
        else
            this.updateItem(item);
    }
    updateItem(item:Item)
    {
        item.unit=item.unit.toUpperCase();
        this.bms_api.updateItem(item).toPromise().then(item => {
            this.item=item; 
            this.goBack(item);
        });
    }
    deleteItem(item:Item)
    {
        this.bms_api.deleteItem(item).toPromise().then(items => {
            this.goBack();
        });
    }

    goBack(item: Item = null) {
        this.close.emit(item);
        window.history.back();
    }
    ngOnDestroy()
    {
        this.sub.unsubscribe();
    }
}