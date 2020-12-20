import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { LinkSectionPipe } from './pipes/link-section.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LinkSectionPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule
  ],
  exports :[
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    LinkSectionPipe,
    HttpClientModule,
    RouterModule
  ]
})
export class SharedModule { }
