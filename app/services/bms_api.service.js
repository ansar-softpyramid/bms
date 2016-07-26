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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var BmsApiService = (function () {
    function BmsApiService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:8000';
        this.resourceItems = this.apiUrl + '/items';
    }
    BmsApiService.prototype.getItems = function () {
        return this.http.get(this.resourceItems)
            .map(this.extractData)
            .catch(this.handleError);
    };
    BmsApiService.prototype.findItem = function (id) {
        return this.http.get(this.resourceItems + '/' + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    BmsApiService.prototype.saveItem = function (item) {
    };
    BmsApiService.prototype.updateItem = function (item) {
    };
    BmsApiService.prototype.deleteItem = function (item) {
    };
    BmsApiService.prototype.extractData = function (res) {
        var data = res.json();
        return data || {};
    };
    BmsApiService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    BmsApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BmsApiService);
    return BmsApiService;
}());
exports.BmsApiService = BmsApiService;
//# sourceMappingURL=bms_api.service.js.map