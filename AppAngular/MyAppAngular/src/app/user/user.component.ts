import { Component } from '@angular/core';
import { GamesComponent } from "../games/games.component";

@Component({
  selector: 'app-user',
  imports: [GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
greet() {
alert('Hola a todos!!!!');
}
  userName='Ederam';
  IsConnected=false; // esta variable se comporta como un state
}
