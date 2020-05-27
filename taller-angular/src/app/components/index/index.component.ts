import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  destacados = [ 
      {
        img: 'assets/img/signs-3479398_1920.jpg', 
        frase1: 'Explore Me', frase2: 'Book Me'
      }
    ];

  iconos = ['assets/img/drink.png', 'assets/img/eat.png']

  slogan = '"Las aventuras primero, las explicaciones toman demasiado tiempo"'

  viaje = {
    nombre: "El Castillo Rojo - Destinos", 
    img: "assets/img/military-1786141_1920.jpg", 
    descripcion: "Un lugar lleno de magia y estilo, ubicado en el corazón del país de las maravillas, cuna de la realeza y de los más celebres personajes que se pueda encontrar, un lugar donde el lujo la fantasía y las rosas rojas cubren sus amplios campos y praderas hasta donde llega la vista, así mismo se constituye como la sede principal de los más importantes eventos deportivos del país, como el campeonato de croquet jugado por nada más y nada menos que la mismísima reina de corazones, así como el torneo de ajedrez con fichas reales al mejor estilo del mundo mágico."
    }

  evento = {
    nombre: "Una merienda de locos - Planes", 
    img: "assets/img/merienda1.jpg", 
    descripcion: "Asiste a uno de los eventos típicos de Wonderland más reconocidos a nivel mundial, vive la experiencia de tomar un té (o no) en compañía del sombrerero loco o la liebre de marzo, o conejo blanco o nadie, en realidad nadie sabe qué puede pasar, lo que sí sabemos es que hay platillos para todos los gustos y colores, no importa el sabor no importan sus efectos, es más ni siquiera importa si se puede comer o no, un plan completo que incluye transporte estadía e ingreso al evento."
    }

  testimonios = [ 
      {
        img:'assets/img/aliciaWeb.png', 
        frase: '"Cuando llegue a casa debo de escribir un libro acerca de este lugar."', 
        nombre:'Alicia'
        },

      {img:'assets/img/avrilWeb.png', 
      frase: '"Me he encontrado a mi misma en el paìs de las maravillas"', 
      nombre:'Avril Lavigne'
      }, 

      {
        img:'assets/img/redqueenWeb.png', frase: '"Perderán la cabeza"', nombre:'Reina Roja'
        }
    ];

}
