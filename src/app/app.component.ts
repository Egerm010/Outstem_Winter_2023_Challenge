import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeserviceService } from './pokeservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'poke_api_project';
   pokemon: any;
   //cacheMe!: Cache;

  constructor(private pokeService: PokeserviceService) {}


  getPokeResponse() {
   // if(this.cacheMe.match("https://pokeapi.co/api/v2/pokemon/"+ (<HTMLInputElement>document.getElementById("pokemonsearch")).value + "/") == null){
   //  this.cacheMe.add("https://pokeapi.co/api/v2/pokemon/"+ (<HTMLInputElement>document.getElementById("pokemonsearch")).value + "/");
    //}
    var poke = (<HTMLInputElement>document.getElementById("pokemonsearch")).value;
    this.pokeService.getPokemon(poke)
      .subscribe(data => {this.pokemon = data});

  }
  
  ngOnInit(): void {
  }
}
