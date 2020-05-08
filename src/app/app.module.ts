import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListPokemonComponent } from './components/list-pokemon/list-pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { FindPokemonComponent } from './components/find-pokemon/find-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPokemonComponent,
    FindPokemonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
