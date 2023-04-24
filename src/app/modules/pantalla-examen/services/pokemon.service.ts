import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private _http: HttpClient) {
  }

  initEventPokemon(): Observable<any> {
    return this._http.get<any>(this.urlPokemon);
  }
}
