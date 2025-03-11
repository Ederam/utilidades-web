import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UserComponent],
  // templateUrl: './app.component.html',
  template: `
  <h1>Hola a todos,enviando codigo html y estilo css desde el componente principal de la aplicacion "app.component.ts"</h1>
  <h1>La aplicación se llama {{title}}</h1>
  <h1>La aplicación se llama {{title.toUpperCase()}} usando funcion de javascript</h1>
  <app-user></app-user>
  <!-- se puede usar varias veces y tambien de la otra manera <app-user/>-->
  <app-user/><app-user/>
  `,
  // styleUrl: './app.component.css'
  styles: `h1{
    color: azul}`
})
export class AppComponent {
  title = 'MyAppAngular';
}
