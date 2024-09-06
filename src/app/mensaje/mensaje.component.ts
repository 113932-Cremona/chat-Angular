import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mensaje',
  standalone: true,
  imports: [],
  templateUrl: './mensaje.component.html',
  styleUrl: './mensaje.component.css'
})
export class MensajeComponent {

  mensaje:string = "";
  mensaje2:string = "";

  @Output() salida1:EventEmitter<any> = new EventEmitter();
  
  @Output() salida2:EventEmitter<any> = new EventEmitter();

  enviarMensj1(mensaje:any){

    this.mensaje = mensaje.target.value;
  }
  enviarMensj2(mensaje:any){
    this.mensaje2 = mensaje.target.value;
  }

  send1(){
    
    if(this.mensaje.trim() === ""){
      alert("no funca")
    }
    else{
      this.salida1.emit("pepe: " +this.mensaje)
      this.mensaje="";
    }
  }
  send2(){
    if(this.mensaje2.trim() === ""){
      alert("no funca")
    }
    else{
      this.salida2.emit("maria: " + this.mensaje2)
      this.mensaje2="";
    }
  }
}
