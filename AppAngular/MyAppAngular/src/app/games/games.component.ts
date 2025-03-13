import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-games',
  imports: [],
  template: `
    <ul>
      <p>Estos son los juegos favoritos de {{ userName}}</p>
      @for (game of games; track game.id) {
        <li>{{ game.name}}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
@Input() userName = '';

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
