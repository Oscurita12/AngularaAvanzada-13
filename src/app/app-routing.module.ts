import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

//Los @ son anotaciones o decoradores de clase, le permiten inyectar funcionalidades al objeto que tienen abajo, elementos
// y funcionalidades adicionales 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
