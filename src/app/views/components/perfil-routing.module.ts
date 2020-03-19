import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppURl } from 'src/app/config/app-urls.config';
import { AdminPerfilComponent } from './admin-perfil/admin-perfil.component';

const routes: Routes = [
  { path: AppURl.PerfilRoot, redirectTo: AppURl.Perfil, pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
