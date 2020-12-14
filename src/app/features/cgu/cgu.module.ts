import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CguComponent } from './cgu/cgu.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CguRoutingModule } from './cgu-routing.module';



@NgModule({
  declarations: [CguComponent],
  imports: [
    CommonModule,
    SharedModule,
    CguRoutingModule
  ]
})
export class CguModule { }
