"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
//Components
var dashboard_component_1 = require('../dashboard/dashboard.component');
var items_component_1 = require('../items/items.component');
var item_detail_component_1 = require('../item-detail/item-detail.component');
var router_1 = require('@angular/router');
var bootstrap_1 = require('angular2-modal/plugins/bootstrap');
require('/app/rxjs-operators');
//Services
var items_service_1 = require('../services/items.service');
var AppComponent = (function () {
    function AppComponent(modal, viewContainer) {
        this.modal = modal;
        this.title = "Billing Management System";
        modal.defaultViewContainer = viewContainer;
    }
    AppComponent.prototype.openModal = function () {
        var v = this.modal.alert()
            .bodyClass('modal-custom')
            .size('md')
            .showClose(true)
            .titleHtml('<h3>Hello</h3>')
            .open();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: '/app/app/app.component.html',
            styleUrls: ['app/app/app.component.css'],
            viewProviders: [bootstrap_1.BS_MODAL_PROVIDERS],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [items_service_1.BmsApiService],
            precompile: [dashboard_component_1.DashboardComponent, item_detail_component_1.ItemDetailComponent, items_component_1.ItemsComponent]
        }), 
        __metadata('design:paramtypes', [bootstrap_1.Modal, core_1.ViewContainerRef])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map