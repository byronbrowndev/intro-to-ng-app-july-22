import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // talk ternary
  // talk truthy and falsy
  // give homecard and interface

  homeCardsData: any = [
    {
      title: 'Pokemon',
      icon: 'catching_pokemon'
    },
    {
      title: 'Tour of Heroes',
      icon: 'bolt'
    },
    {
      title: 'Experiment',
    },
  ]

  constructor() { }

}
