import { Component, ViewContainerRef } from '@angular/core';
//Components
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ItemsComponent } from '../items/items.component';
import { ItemDetailComponent } from '../item-detail/item-detail.component';

import { ROUTER_DIRECTIVES} from '@angular/router';
import { Modal, BS_MODAL_PROVIDERS } from 'angular2-modal/plugins/bootstrap';
import '/app/rxjs-operators';

//Services
import { BmsApiService } from '../services/items.service';


@Component({
    selector: 'my-app',
    templateUrl: '/app/app/app.component.html',
    styleUrls: ['app/app/app.component.css'],
    viewProviders: [BS_MODAL_PROVIDERS ],
    directives: [ROUTER_DIRECTIVES],
    providers: [BmsApiService],
    precompile: [DashboardComponent, ItemDetailComponent, ItemsComponent]
})
export class AppComponent {
    private title: string="Billing Management System";
    constructor(public modal: Modal, viewContainer: ViewContainerRef) {
        modal.defaultViewContainer = viewContainer;
    }
    openModal()
    {
        let v= this.modal.alert()
        .bodyClass('modal-custom')
        .size('md')
        .showClose(true)
        .titleHtml('<h3>Hello</h3>')
        .open();
    }
}