import { Component } from '@angular/core';
import { GamesComponent } from "../games/games.component";

@Component({
  selector: 'app-user',
  imports: [GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  userName='Ederam';
  IsConnected=false; // esta variable se comporta como un state
  favGame='';

  getFavorite(gameName: string){
    this.favGame = gameName;
  }

  greet() {
    alert('Hola a todos!!!!');
    }
}
