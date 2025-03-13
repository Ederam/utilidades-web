import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  imports: [],
  template: `
    <ul>
      <p>Estos son los juegos favoritos de {{ userName}}</p>
      @for (game of games; track game.id) {
        <li (click)="fav(game.name)">{{ game.name}}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {

@Input() userName = '';
@Output() addFavoriteEvent= new EventEmitter<string>();

fav(gameName: string) {
  //alert(`A ${this.userName} le gusta jugar a ${gameName}`);
  this.addFavoriteEvent.emit(gameName);
  }

  games =[
    {
      id:1,
      name:'Mario'
    },
    {
      id:2,
      name:'Uncharted'
    },
    {
      id:3,
      name:'Fifa 2021'
    },
    {
      id:4,
      name:'Crash'
    }
  ]
}
