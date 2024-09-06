import { Component, input, Input } from '@angular/core';
import { MensajeComponent } from "../mensaje/mensaje.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [MensajeComponent,FormsModule,CommonModule],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent {

  @Input() msj:any[]=[]
  


  setMessage(evento: any){
    this.msj.push(evento)
  }
  setMessage2(evento: any){
    this.msj.push(evento)
  }
}
