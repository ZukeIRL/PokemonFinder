import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { PokeResponse } from '../PokeResponse';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url = "https://pokemon-go1.p.rapidapi.com/pokemon_stats.json";

  constructor(private http:HttpClient) { }

  getPokeData(): Observable<PokeResponse> {
    return this.http.get<PokeResponse>(this.url, 
      {
        headers : new HttpHeaders({
          'x-rapidapi-key': 'a6cef4cbcamsh05b29346394d4a4p1bafacjsn2a92406ac103'
        })
      })
    .pipe(
      tap(data => console.log('Pokedata/Error' + JSON.stringify(data)
      ),
      catchError(this.handleError)
    ));
  }

  private handleError(err:HttpErrorResponse) {
    console.log('PokemonService: ' + err.message);
    return Observable.throw(err.message);
  }
}
