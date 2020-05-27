import {Component} from '@angular/core';

@Component({
    selector: "app-contacto", //tag html,
    templateUrl: "./contacto.component.html", //ruta html,
    styleUrls: ["./contacto.component.css"] //ruta css
})

export class ContactoComponent {

    datos(valor){
        
       var datos = [];
       datos = valor
       alert(`Gracias ${datos[0]}, Su registro para ${datos[2]} el día ${datos[3]} ha sido exitoso, se ha enviado un correo a ${datos[1]} con toda la información. esperamos disfrute su nueva aventura.`)

    }
}