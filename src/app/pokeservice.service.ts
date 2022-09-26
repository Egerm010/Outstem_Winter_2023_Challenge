import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokeserviceService {
  cacheMe!: Cache;
  constructor(private http: HttpClient) { }

  getPokemon(pokemon: any) {
   // if(this.cacheMe.match("https://pokeapi.co/api/v2/pokemon/"+pokemon+"/") != null){
     return this.http.get<any>("https://pokeapi.co/api/v2/pokemon/"+pokemon+"/");
 // }
    //else{
   // this.cacheMe.add("https://pokeapi.co/api/v2/pokemon/"+pokemon+"/");
    //return this.http.get<any>("https://pokeapi.co/api/v2/pokemon/"+pokemon+"/"); 
    //}
  }
}
