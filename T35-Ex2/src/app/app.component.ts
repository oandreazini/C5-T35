import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'T35-Ex2';

  constructor() {}

  name: string = '';
  email: string = '';
  comments: string = '';
  check: string = '';
  client: Array<object> = [];

  message1: string = '';
  message2: string = '';
  message3: string = '';
  message4: string = '';

  //Función donde se comprueba que los mensajes de alerta esten vacios
  validateForm() {
    if (this.name.length == 0) {
      this.message1 = 'Introduzca su nombre y apellido';
    } else if (this.name.length > 5) {
      this.message1 = '';
    }

    if (this.email.length == 0) {
      this.message2 = 'Introduzca un email valido';
    } else if (this.email.length > 5) {
      this.message2 = '';
    }

    if (this.comments.length == 0) {
      this.message3 = 'Introduzca un mensaje';
    } else if (this.comments.length > 0) {
      this.message3 = '';
    }

  }

  //Se comprueba que el mensaje de anti-spam sea correcto y se llama a la función validateForm, si todo esta correcto introduce los datos
  createForm() {

    if (this.check != '5') {
      this.message4 = 'Validación anti-spam incorrecta';

    } else if (this.check === '5'){
      this.validateForm();
      this.message4 = '';
    }

    if( this.message1 === '' && this.message2 === '' && this.message3 === '' && this.message4 === '') {
      this.client.push({
        name: this.name,
        email: this.email,
        comments: this.comments,
      });
    }

    }

  ngOnInit(): void {
    this.createForm();
  }
}
