import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminPerfilComponent } from './admin-perfil.component';
import { MaterialModule } from 'src/app/share/material.module';

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminPerfilComponent
      }
    ])
  ],
  declarations: [AdminPerfilComponent]
})
export class AdminPerfilModule {}
