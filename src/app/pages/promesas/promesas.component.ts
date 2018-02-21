import { Component, OnInit } from '@angular/core';
import { resolve } from 'path';
import { reject } from 'q';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contarTres().then (
      // () => console.log('Termino!!')
      mensaje => console.log('Termino!!', mensaje)
    )
    .catch( error => console.error('Error en la promesa', error));
  }

  ngOnInit() {
  }

  contarTres(): Promise<boolean> {
     // tslint:disable-next-line:no-shadowed-variable
    return new Promise( (resolve, reject) => {
      // tslint:disable-next-line:no-trailing-whitespace

      let contador = 0;

     // tslint:disable-next-line:prefer-const
     let intervalo = setInterval( () => {

        contador += 1;
        console.log(contador);

        if (contador === 3) {
           resolve(true); // terminar
         // reject('Simplemente un error'); // Mostrar un error personalizado
          clearInterval(intervalo);
        }

      }, 1000 );

    });

  }

}
