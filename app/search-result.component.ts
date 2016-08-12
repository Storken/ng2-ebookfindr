import { Component, OnInit } from '@angular/core';
import { Ebook } from './ebook';
import { EbookService } from './ebook.service';

@Component({
  selector: 'search-result',
  templateUrl: 'app/search-result.component.html'
})

export class SearchResultComponent implements OnInit{

  constructor(private ebookService: EbookService) {}

  ebooks: Ebook[];

  this.ebooks.sort((ebook1, ebook2): number => {
    if (ebook1.id < ebook2.id) {
      return -1;
    }
    else if (ebook2.id < ebook1.id) {
      return 1;
    }
    return 0;
  });

  ebooks = ebooks.sort();

  getEbooks() {
      this.ebookService.getEbooks().then(ebooks => this.ebooks = ebooks);
  }

  ngOnInit() {
    this.getEbooks();
  }
}
