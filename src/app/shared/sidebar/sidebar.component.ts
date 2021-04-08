import { Component, OnInit } from '@angular/core';

import { GifsService } from 'src/app/gifs/service/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {



  constructor(private gifsService: GifsService) { }

  get history() {
    return this.gifsService.history

  }

}
