import { Component } from '@angular/core';
import { SearchResultComponent } from './search-result.component';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { EbookService } from './ebook.service';

@Component({
  selector: 'ebookfindr-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [EbookService]
})

export class AppComponent {
    title = "EbookFindr";
    search = "";
}
