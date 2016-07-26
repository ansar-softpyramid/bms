import  { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HighlightDirective } from '../directives/highlight.directive';
import { BmsApiService } from '../services/items.service';
import { Item } from '../modals/item';

import { Title }     from '@angular/platform-browser';


@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    styleUrls: ['app/dashboard/dashboard.component.css'],
    directives: [HighlightDirective]
})

export class DashboardComponent implements OnInit{
    private items:any;
    constructor(private router: Router, private bmsService: BmsApiService, private titleService: Title) {}
    
    ngOnInit() {
        this.titleService.setTitle('BMS | Dashboard');
        this.bmsService.getItems().toPromise().then(items => this.items = items.slice(1, 5));
    }
    gotoDetail(item: Item) { 
        let link = ['/item-detail', item.id ];
        this.router.navigate(link);
    }
}