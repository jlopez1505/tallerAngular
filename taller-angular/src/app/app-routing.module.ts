import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./components/index/index.component";
import { AboutComponent } from "./components/about/about.component";
import { DestinosComponent } from "./components/destinos/destinos.component";
import { ContactoComponent } from "./components/contacto/contacto.component";

const routes: Routes = [
    {path: 'contacto', component: ContactoComponent},
    {path: 'about', component: AboutComponent},
    {path: 'destinos', component: DestinosComponent},
    {path: '', component: IndexComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}