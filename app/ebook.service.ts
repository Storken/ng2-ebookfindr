import { Injectable } from '@angular/core';
import { EBOOKS } from './mock-results';

@Injectable()
export class EbookService {
  getEbooks(){
    return Promise.resolve(EBOOKS);
  }
}
