import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

 @ViewChild('txtProgress') txtProgress: ElementRef;

 @Input('nombre') leyenda: string = 'Leyenda';
 @Input()  progreso: number = 50;

 @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('Leyenda' , this.leyenda);
    // console.log('Progreso' , this.progreso);
  }

  ngOnInit() {
  }

  onChange( newValue: number) {

    // MODO ANTIGUO
    // this.cambiarValor(newValue);
    // tslint:disable-next-line:prefer-const
    // let elemHtml: any = document.getElementsByName('progreso')[0];
    // let elemHtml: any = document.getElementsByName('progreso')[0];
    // console.log(elemHtml.value);

    if ( newValue >= 100) {
      this.progreso = 100;
    } else if ( newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

    // elemHtml.value = this.progreso;
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(newValue);

    console.log( newValue );
  }

  cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }
    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }

    this.progreso += valor;

    this.cambioValor.emit(this.progreso);

    this.txtProgress.nativeElement.focus();

  }

}
