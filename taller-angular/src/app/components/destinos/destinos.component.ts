import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destinos',
  templateUrl: './destinos.component.html',
  styleUrls: ['./destinos.component.css']
})
export class DestinosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 planes = ["Feliz feliz no cumpleaos", "El consejo de una oruga", "Una merienda de locos", "El croquet de la reina", "Fin de semana divertidoso", "Un breve viaje en cronosfera", "Conejo blanco", "Dia de imposibilidades"];

  destinos = ["El londres de las maravillas", "El mundo real", "El mundo a través del espejo", "Las antipáticas","Las tierras salvajes", "mar de lagrimas"];

}
