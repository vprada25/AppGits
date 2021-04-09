import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataGif, SearchGIFResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _history: string[] = [];
  private _api: string = 'kGiUp9RAOvVCRRBzANY9HvLTrncg7Prp';
  private _url: string = 'http://api.giphy.com/v1/gifs';

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

    const params = new HttpParams()
      .set('api_key', this._api)
      .set('limit', '20')
      .set('q', query)

    this.http.get<SearchGIFResponse>(`${this._url}/search`, {params: params})
      .subscribe((req: any) => {
        console.log(req.data)
        this.response = req.data
        localStorage.setItem('resultado', JSON.stringify(this.response))

      })


  }


}
