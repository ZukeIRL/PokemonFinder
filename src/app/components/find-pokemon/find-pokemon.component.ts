import { Component, OnInit, ɵConsole } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';
import { PokeResponse, results, Pokemon } from 'src/app/PokeResponse';

@Component({
  selector: 'app-find-pokemon',
  templateUrl: './find-pokemon.component.html',
  styleUrls: ['./find-pokemon.component.css']
})
export class FindPokemonComponent implements OnInit {

  constructor(private pokeService:PokeApiService) { }

  ngOnInit(): void {
  }

  uniqueListPoke = [];
  flags = {};
  pokeData:PokeResponse;
  errorMessage:any;

  pokeArray:results;

  getPokeByName(pokeName:string) : boolean{
    this.pokeService.getPokeData().subscribe( 
      pokeData => {
        this.pokeData = pokeData;
        const match = this.pokeData.filter(x => x.pokemon_name.toLowerCase() == pokeName.toLowerCase());
        this.pokeData = match;
      },
       error => this.errorMessage = <any>error
    );
    return false;
  }

  getRandomPoke() : boolean{
    this.pokeService.getPokeData().subscribe(
      pokeData => {
        this.pokeData = pokeData;
        const match = this.pokeData.filter(x => x.pokemon_id == Math.floor(Math.random() * 809)+ 1);
        this.pokeData = match;
      },
       error => this.errorMessage = <any>error
    );
    return false;
  }
}
