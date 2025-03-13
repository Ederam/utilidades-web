import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  imports: [UserComponent],
  // imports: [UserComponent],
  templateUrl: './app.component.html',
  // template: `
  // <h1>Hola a todos,enviando codigo html y estilo css desde el componente principal de la aplicacion "app.component.ts"</h1>
  // <h1>La aplicación se llama {{title}}</h1>
  // <h1>La aplicación se llama {{title.toUpperCase()}} usando funcion de javascript</h1>
  // <app-user></app-user>
  // <!-- se puede usar varias veces y tambien de la otra manera <app-user/>-->
  // <app-user/><app-user/>
  // `,
  // styleUrl: './app.component.css'
  // styles: `h1{
  //   color: azul}`
})
export class AppComponent implements OnInit{
  
  title = 'MyAppAngular';

  ngOnInit(): void {
    Notification.requestPermission().then((result) =>{
      console.log(result);
    });

    let text='CUERPO DE LAS NOTIFICACIONES';
    //let img ='https://cdn-icons-png.flaticon.com/512/1827/1827272.png';
    //let img = 'data:image/png;base64,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'
    let img = 'AppAngular\MyAppAngular\src\app\img\card-2.jpg';

    // setTimeout(() => {
    //   new Notification('Nueva Notificación', {
    //     body: text,
    //     icon: img,
    //   })
    // }, 2000);  
  }
  
}
