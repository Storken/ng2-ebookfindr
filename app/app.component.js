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
var SEARCHRESULTS = [
    { id: 1, name: 'Harry Petter', link: 'www.hp.com' },
    { id: 2, name: 'Rävbröder', link: 'www.rb.com' },
    { id: 3, name: 'Magnus Huttus biografi', link: 'www.mhb.com' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = "EbookFindr";
        this.search = "";
        this.searchresults = SEARCHRESULTS;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'ebookfindr-app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var searchresult = (function () {
    function searchresult() {
    }
    return searchresult;
}());
exports.searchresult = searchresult;
//# sourceMappingURL=app.component.js.map