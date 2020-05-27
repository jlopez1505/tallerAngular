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
  {img: 'assets/img/guinea-pig-1969698_1920.jpg', nombre: "Feliz feliz no cumpleaños", actividades: [{nombre: "Partir la No piñata"}, {nombre: "Entrega No Regalos"}, {nombre: "Estadía Hotel Transilvania"}] }, 
  {img: 'assets/img/hookah-75728_1920.jpg', nombre: "El consejo de una oruga", actividades: [{nombre: "Narguile y escencias ilimitadas"}, {nombre: "Spa relajante"}, {nombre: "Sesión de yoga"}] }, 
  {img: 'assets/img/food-2203732_1920.jpg', nombre: "Una merienda de locos", actividades: [{nombre: "Restaurante tipo buffet"}, {nombre: "Dulces y bebidas de cualquier tipo ilimitadas"}, {nombre: "Toma de té con el Sombrerero y la Liebre"}] }, 
  {img: 'assets/img/flamingo-5202971_1920.jpg', nombre: "El criquet de la reina", actividades: [{nombre: "Ajedrez tipo Harry Potter"}, {nombre: "Criquet con Flamingos y erizos"}, {nombre: "Paseo por el castillo"}] }, 
  {img: 'assets/img/b31ad7_d95cb2d7aa30401195fd016a19105650~mv2.jpg', nombre: "Fin de semana divertidoso", actividades: [{nombre: "Deportes extremos"}, {nombre: "Huir de la Reina Roja"}, {nombre: "Taller de Maquillaje con Tim Burton"}] }, 
  {img: 'assets/img/pocket-watch-3156771_1920.jpg', nombre: "Un breve viaje en cronosfera", actividades: [{nombre: "Llegada al sitio a través del espejo"}, {nombre: "Visita al palacio del relojero"}, {nombre: "Viaje a tu epoca favorita"}] }, 
  {img: 'assets/img/woman-731894_1920.jpg', nombre: "Conejo blanco", actividades: [{nombre: "Hotel y cena de lujo"}, {nombre: "Servicio de despertador por el Conejo Blanco"}, {nombre: "WiFi ilimitado"}] }, 
  {img: 'assets/img/274164.jpg', nombre: "Dia de imposibilidades", actividades: [{nombre: "Pintar las rosas de carmin"}, {nombre: "Fiesta electrónica con Galimatazo"}, {nombre: "Distorsionadores de la realidad ilimitados"}] }
   ];

  destinos = [
    {img: 'assets/img/tower-bridge-2324875_1920.jpg', nombre:  "El Londres de las Maravillas", planes: [{nombre: "Feliz feliz no cumpleaños"}, {nombre: "Conejo blanco"}, {nombre: "Una merienda de locos"}] },
    {img: 'assets/img/hong-kong-864884_1920.jpg', nombre:  "El Mundo Real", planes: [{nombre: "Un breve viaje en cronosfera"}, {nombre: "El consejo de una oruga"}, {nombre: "Conejo blanco"}] },
    {img: 'assets/img/pathway-2289978_1920.jpg', nombre:  "El jardín de las flores vivas", planes: [{nombre: "El consejo de una oruga"}, {nombre: "Fin de semana divertidoso"}, {nombre: "Feliz feliz no cumpleaños"}] },
    {img: 'assets/img/garden-2040714_1920.jpg', nombre:  "El Mundo a Través del Espejo", planes: [{nombre: "Un breve viaje en cronosfera"}, {nombre: "bEl criquet de la reina"}, {nombre: "Dia de imposibilidades"}] },
    {img: 'assets/img/butterfly-2049567_1920.jpg', nombre:  "El Bosque Turgal", planes: [{nombre: "El consejo de una oruga"}, {nombre: "Dia de imposibilidades"}, {nombre: "Fin de semana divertidoso"}] }, 
    {img: 'assets/img/urban-438393_1920.jpg', nombre:  "Las Antipáticas", planes: [{nombre: "Conejo blanco"}, {nombre: "Una merienda de locos"}, {nombre: "Feliz feliz no cumpleaños"}] },
    {img: 'assets/img/aurora-1197753_1920.jpg', nombre:  "Las Tierras Salvajes", planes: [{nombre: "Dia de imposibilidades"}, {nombre: "Fin de semana divertidoso"}, {nombre: "Feliz feliz no cumpleaños"}] }, 
    {img: 'assets/img/polynesia-3021072_1920.jpg', nombre:  "El Mar de Lagrimas", planes: [{nombre: "Un breve viaje en cronosfera"}, {nombre: "El criquet de la reina"}, {nombre: "Una merienda de locos"}] },
    ];

}
