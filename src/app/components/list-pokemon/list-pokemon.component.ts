import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';
import { PokeResponse, results, Pokemon } from 'src/app/PokeResponse';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {
  uniqueListPoke = [];
  flags = {};

  constructor(private pokeService: PokeApiService) { }

  ngOnInit(): void {
    this.getPokeDetails();
  }

  pokeData:PokeResponse;
  errorMessage:any;

  pokeArray:results;

  getPokeDetails() : boolean {
    this.pokeService.getPokeData().subscribe(
      pokeData => {
        this.uniqueListPoke = pokeData.filter((entry) => {
            if (this.flags[entry.pokemon_name]) {
                return false;
            }
            this.flags[entry.pokemon_name] = true;
            return true;
        });
        console.log(JSON.stringify(this.uniqueListPoke));
      },
       error => this.errorMessage = <any>error
    );
    return false;
  }

  sortByAtk(): boolean{
    this.pokeService.getPokeData().subscribe(
      pokeData => {
        this.pokeData = pokeData;
        pokeData = pokeData.sort((a, b) => b - a);
        console.table(pokeData);
      },
       error => this.errorMessage = <any>error
    );
    return false;
  }
}