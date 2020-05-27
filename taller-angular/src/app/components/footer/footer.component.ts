import { Component } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent {

  social = ['assets/img/whats.png', 'assets/img/insta.png', 'assets/img/face.png','assets/img/twitter.png'];

  datosPersonales = "Vamos a tomar un té";
  stuff = "Información Aburrida";

  datos = {telefono: 5555555,
  direccion: "País de las Maravillas, Loquilandia 23-45",
  correo: "gatodecheshire@elmichi.com"
 }

 copyright = "Ejercicio Académico, Jonathan López, todos los derechos reservados de ilustraciones y textos a sus respectivos creadores, bla bla bla, ¿quién lee esto?, no tiene ilustraciones que aburrido, bla bla bla cosas legales, bla bla bla, BICTIA 2020 bla bla bla."

  enlaces = ['https://www.freepik.es/fotos-vectores-gratis/logo',] /* esto va en otro lado */

  
}
