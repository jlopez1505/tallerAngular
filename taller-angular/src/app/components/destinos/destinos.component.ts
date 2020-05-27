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

  estado: boolean = true;

  cambiar(){
    this.estado = !this.estado
  }

 planes = [
  {img: 'assets/img/guinea-pig-1969698_1920.jpg', nombre: "Feliz feliz no cumpleaños", actividades: [{nombre: "a"}, {nombre: "b"}, {nombre: "c"}] }, 
  {img: 'assets/img/hookah-75728_1920.jpg', nombre: "El consejo de una oruga", actividades: [{nombre: "a"}, {nombre: "b"}, {nombre: "c"}] }, 
  {img: 'assets/img/food-2203732_1920.jpg', nombre: "Una merienda de locos", actividades: [{nombre: "a"}, {nombre: "b"}, {nombre: "c"}] }, 
  {img: 'assets/img/flamingo-5202971_1920.jpg', nombre: "El croquet de la reina", actividades: [{nombre: "a"}, {nombre: "b"}, {nombre: "c"}] }, 
  {img: 'assets/img/b31ad7_d95cb2d7aa30401195fd016a19105650~mv2.jpg', nombre: "Fin de semana divertidoso", actividades: [{nombre: "a"}, {nombre: "b"}, {nombre: "c"}] }, 
  {img: 'assets/img/pocket-watch-3156771_1920.jpg', nombre: "Un breve viaje en cronosfera", actividades: [{nombre: "a"}, {nombre: "b"}, {nombre: "c"}] }, 
  {img: 'assets/img/woman-731894_1920.jpg', nombre: "Conejo blanco", actividades: [{nombre: "a"}, {nombre: "b"}, {nombre: "c"}] }, 
  {img: 'assets/img/274164.jpg', nombre: "Dia de imposibilidades", actividades: [{nombre: "a"}, {nombre: "b"}, {nombre: "c"}] }
   ];

  destinos = [
    {img: 'assets/img/tower-bridge-2324875_1920.jpg', nombre:  "El Londres de las Maravillas", planes: [{nombre: "a"}, {nombre: "b"}, {nombre: "c"}] },
    {img: 'assets/img/hong-kong-864884_1920.jpg', nombre:  "El Mundo Real", planes: [{nombre: "a"}, {nombre: "b"}, {nombre: "c"}] },
    {img: 'assets/img/pathway-2289978_1920.jpg', nombre:  "El jardín de las flores vivas", planes: [{nombre: "a"}, {nombre: "b"}, {nombre: "c"}] },
    {img: 'assets/img/garden-2040714_1920.jpg', nombre:  "El Mundo a Través del Espejo", planes: [{nombre: "a"}, {nombre: "b"}, {nombre: "c"}] },
    {img: 'assets/img/butterfly-2049567_1920.jpg', nombre:  "El Bosque Turgal", planes: [{nombre: "a"}, {nombre: "b"}, {nombre: "c"}] }, 
    {img: 'assets/img/urban-438393_1920.jpg', nombre:  "Las Antipáticas", planes: [{nombre: "a"}, {nombre: "b"}, {nombre: "c"}] },
    {img: 'assets/img/aurora-1197753_1920.jpg', nombre:  "Las Tierras Salvajes", planes: [{nombre: "a"}, {nombre: "b"}, {nombre: "c"}] }, 
    {img: 'assets/img/polynesia-3021072_1920.jpg', nombre:  "El Mar de Lagrimas", planes: [{nombre: "a"}, {nombre: "b"}, {nombre: "c"}] },
    ];

}
