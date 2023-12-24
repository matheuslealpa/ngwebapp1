import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


export const MATERIAL_DESIGNER = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatProgressBarModule,
  MatDividerModule,
  MatSidenavModule,
  MatListModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MATERIAL_DESIGNER
  ],
  exports: [
    MATERIAL_DESIGNER
  ]
})
export class SharedModule { }
