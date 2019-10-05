import { Component, OnInit, SimpleChange } from '@angular/core';

import {timer, interval} from 'rxjs';
import {take, takeWhile} from 'rxjs/operators';
import { when } from 'q';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }

  play= true;         //Estado. Necesario?
  cuentaVueltas=0;    // Contador Repeticiones;
  tiempo=0;           // Tiempo actual del crono
  segundos=0;         // Segundos definidos por usuario
  repeticiones=0;     // Repeticiones definidas por usurio

  start(){
    interval(this.repeticiones).pipe(takeWhile(()=> this.play)).subscribe(()=>
      this.inicia()
    )  
  }

  inicia(){
    console.log('cuentavueltas', this.cuentaVueltas);
    if(this.cuentaVueltas > this.repeticiones){
      this.play=false;
    } else {
      if(this.tiempo===0){
        timer(this.tiempo, 1000).pipe(take(this.segundos)).subscribe(() =>
        this.crono())
      } else if(this.tiempo >= this.segundos){
        this.cuentaVueltas++;
        this.tiempo=0;
      }
    }
  }

  crono() {
    console.log('tiempo', this.tiempo);
    this.tiempo++;
  }

}
