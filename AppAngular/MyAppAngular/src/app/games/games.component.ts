import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  imports: [],
  template: `
    <p>
      games works!
    </p>
  `,
  styles: ``
})
export class GamesComponent {

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
