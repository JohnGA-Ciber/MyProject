import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';


/**Se importan los componentes y exportan para su uso. */


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
  ]
})
export class CoreModule { }
