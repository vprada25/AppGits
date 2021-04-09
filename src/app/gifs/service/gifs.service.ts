import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataGif, SearchGIFResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _history: string[] = [];
  private _api: string = 'kGiUp9RAOvVCRRBzANY9HvLTrncg7Prp'

  public response: DataGif[] = []

  get history() {
    return [...this._history]
  }

  constructor(private http: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('historial')!) || []
    this.response = JSON.parse(localStorage.getItem('resultado')!) || []
    /*  if ( localStorage.getItem('historial') ) {
       this._history = JSON.parse(localStorage.getItem('historial')!)
       
     } */
  }

  searchGifs(query: string) {

    query = query.trim().toLocaleLowerCase();

    if (!this._history.includes(query)) {

      this._history.unshift(query)
      this._history = this._history.splice(0, 10)

      localStorage.setItem('historial', JSON.stringify(this._history))

    }

    this.http.get<SearchGIFResponse>(`http://api.giphy.com/v1/gifs/search?api_key=kGiUp9RAOvVCRRBzANY9HvLTrncg7Prp&q=${query}&limit=10`)
      .subscribe((req: any) => {
        console.log(req.data)
        this.response = req.data
        localStorage.setItem('resultado', JSON.stringify(this.response))

      })


  }


}
