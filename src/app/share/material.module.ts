import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
    MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule, MatPaginatorModule 
  } from '@angular/material';
  import {MatCheckboxModule} from '@angular/material/checkbox';
  import {MatFormFieldModule} from '@angular/material/form-field';
  import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
    declarations: [
    ],
    imports: [
        MatTabsModule,
        MatFormFieldModule,
        CommonModule,
        MatCheckboxModule,
        MatInputModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatDialogModule,
        MatTableModule,
        MatMenuModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatPaginatorModule  
    ],
    exports: [
        MatTabsModule,
        MatInputModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatCheckboxModule,
        MatDialogModule,
        MatTableModule,
        MatMenuModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatPaginatorModule 
    ],
    providers: [
    ]
})
export class MaterialModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MaterialModule,
            providers: [/* In case (rare) we want to share providers too, we'll use the .forRoot() method when importing the module*/]
        };
    }
}
