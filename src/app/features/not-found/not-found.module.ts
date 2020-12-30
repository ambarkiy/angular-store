import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from '../../shared/shared.module';
import { NotFoundRoutingModule } from './not-found-routing.module';



@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    SharedModule,
    NotFoundRoutingModule
  ]
})
export class NotFoundModule { }
