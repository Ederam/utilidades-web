import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  // templateUrl: './app.component.html',
  template: `
  <h1>Hola a todos,enviando codigo html y estilo css desde el componente principal de la aplicacion "app.component.ts"</h1>
  <h1>La aplicación se llama {{title}}</h1>
  <h1>La aplicación se llama {{title.toUpperCase()}} usando funcion de javascript</h1>
  `,
  // styleUrl: './app.component.css'
  styles: `h1{
    color: azul}`
})
export class AppComponent {
  title = 'MyAppAngular';
}
