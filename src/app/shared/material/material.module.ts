import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

const modules = [MatToolbarModule, MatListModule, MatIconModule, MatCardModule, MatFormFieldModule, MatButtonModule, MatInputModule];



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: modules
})
export class MaterialModule { }
