import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleEscritorComponent } from './components/detalle-escritor/detalle-escritor.component';
import { ListaEscritoresComponent } from './components/lista-escritores/lista-escritores.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  // { path: 'escritores', component: ListaEscritoresComponent },
  { path: 'escritores/:idEscritor', component: DetalleEscritorComponent },
  { path: '**', redirectTo: '/escritores'  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
