import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PantallaExamenComponent} from "./modules/pantalla-examen/pantalla-examen.component";

const routes: Routes = [
  {
    path: 'pantalla-examen',
    component: PantallaExamenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
