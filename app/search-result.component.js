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
var _this = this;
var core_1 = require('@angular/core');
var ebook_service_1 = require('./ebook.service');
var SearchResultComponent = (function () {
    function SearchResultComponent(ebookService) {
        this.ebookService = ebookService;
    }
    SearchResultComponent = __decorate([
        core_1.Component({
            selector: 'search-result',
            templateUrl: 'app/search-result.component.html'
        }), 
        __metadata('design:paramtypes', [ebook_service_1.EbookService])
    ], SearchResultComponent);
    return SearchResultComponent;
}());
exports.SearchResultComponent = SearchResultComponent;
this.ebooks.sort(function (ebook1, ebook2) {
    if (ebook1.id < ebook2.id) {
        return -1;
    }
    else if (ebook2.id < ebook1.id) {
        return 1;
    }
    return 0;
});
ebooks = ebooks.sort();
getEbooks();
{
    this.ebookService.getEbooks().then(function (ebooks) { return _this.ebooks = ebooks; });
}
ngOnInit();
{
    this.getEbooks();
}
//# sourceMappingURL=search-result.component.js.map