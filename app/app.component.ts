import { Component } from '@angular/core';

const SEARCHRESULTS: Searchresult[] = [
  { id: 1, name: 'Harry Petter', link: 'www.hp.com' },
  { id: 2, name: 'Rävbröder', link: 'www.rb.com' },
  { id: 3, name: 'Magnus Huttus biografi', link: 'www.mhb.com' }
]

@Component({
  selector: 'ebookfindr-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})

export class AppComponent {
  title = "EbookFindr";
  search = "";
  public searchresults = SEARCHRESULTS;
}

export class searchresult {
  id: number;
  name: string;
  link: string;
}
