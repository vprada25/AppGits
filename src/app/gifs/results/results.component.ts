import { Component, OnInit } from '@angular/core';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styles: [
  ]
})
export class ResultsComponent  {

  constructor(private gifsservice: GifsService) { }

  get response(){
    return this.gifsservice.response
  }

  

}
