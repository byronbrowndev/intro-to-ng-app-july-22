import { Component, Input, OnInit } from '@angular/core';
import { PokemonList } from '../models';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  @Input() pokemonList!: PokemonList | null;

  selectedPokemon: any;

  constructor() { }

  ngOnInit(): void {
  }

}
