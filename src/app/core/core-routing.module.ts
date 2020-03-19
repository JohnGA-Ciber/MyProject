import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppURl } from '../config/app-urls.config';
import { AuthGuard } from '../guards/auth.guard';
import { NologinGuard } from '../guards/nologin.guard';
import { noAdmin } from '../guards/noadmin.guard';
const routes: Routes = [
  { path: AppURl.AppRoot, redirectTo: AppURl.AppHome, pathMatch: 'full' },
  { path: AppURl.AppHome, loadChildren: () => import('../views/home/home.module').then( m => m.HomePageModule), canActivate: [NologinGuard]},
  { path: AppURl.Perfil, loadChildren: () => import('../views/components/perfil.module').then( m => m.PerfilModule), canActivate: [AuthGuard]},
  { path: AppURl.AdminPerfil, loadChildren: () => import('../views/components/admin-perfil/perfil.module').then( m => m.AdminPerfilModule), canActivate: [noAdmin]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
