import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  @ViewChild('txtSearch')
  txtSearch!: ElementRef<HTMLInputElement>;

  constructor(private gifservice: GifsService) {
    
  }

  search() {

    const value = this.txtSearch.nativeElement.value;
    this.gifservice.searchGifs(value);
    this.txtSearch.nativeElement.value = "";

  }

}
