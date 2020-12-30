import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CgvComponent } from './cgv/cgv.component';
import { SharedModule } from '../../shared/shared.module';
import { CgvRoutingModule } from './cgv-routing.module';



@NgModule({
  declarations: [CgvComponent],
  imports: [
    CommonModule,
    SharedModule,
    CgvRoutingModule
  ]
})
export class CgvModule { }
