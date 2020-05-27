import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sub = "No los sabemos"
  quien = "Al menos sabíamos quién eramos cuando despertamos esta mañana, pero creemos que debimos de haber cambiado varias veces desde entonces; en realidad un autor no entiende necesariamente el significado de su propia historia mejor que los demás. Aún así les podemos asegurar que de todas las tonterías a las que han asistido, esta será la más tonta de toda sus vidas. Así que están totalmente locos. Pero les diremos un secreto. Las mejores personas lo están";

  valores = [
    "Pero en lo que a nosostros respecta, personalmente prefierimos siempre el atajo.",
    "¡Si tú no piensas, no debes de hablar!",
    "¡Qué pequeño es este mundo!",
    "Seguro que llegarás a alguna parte si caminas lo suficiente.",
   " No hay nada como comer cuando estás a punto de desmayarte.",
    "La imaginación es la única arma en la guerra contra la realidad.",
    "Si tú crees en mí, yo creeré en ti. ¿Es un trato?",
    "Comienza al principio, y luego sigue hasta que llegues al final. Luego para.",
    "Todo tiene una moraleja si eres capaz de encontrarla.",
    "Todo el mundo ha ganado, y todos deben de tener premios"
  ]

  team = [{img: "assets/img/bs.png", nombre: "Jonathan López", bio: "CEO y desarrollador lider, Lo mejor del mundo mundial, interesante, inteligente, divertido y para nada loco."}, 
  {img: "assets/img/sombrereroWeb.png", nombre: "Tarrant Hightopp", bio: "Tarrant es un alegre miembro del clan de los Hightopp que residía en la aldea del mismo nombre, famoso en su clan por ser el mejor en bailar la Deliranza."}, 
  {img: "assets/img/VACA-DIBUJO-SENCILLO.png", nombre: "Masmelita Empoderada", bio: "Lo segundo mejor del mundo mundial, es tan perfecta que no sabemos si es real o producto de la imaginación, le encantan los conciertos, colorear y tiene un don para controlar las mentes de los cachorros de humano."}]

  partners = [{img: "assets/img/Hotel_Transylvania_logo.png", nombre: "Hotel Transilvania"}, {img: "assets/img/google.png", nombre: "Google"}, {img: "assets/img/disney.png", nombre: "Disney"}, {img: "assets/img/WonderlandKH.png", nombre: "Gobierno del País de las maravillas"} ]

}
