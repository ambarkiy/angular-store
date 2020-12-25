import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { StoreEditComponent } from './store-edit/store-edit.component';

@NgModule({
  declarations: [AdminComponent, StoreEditComponent],
  imports: [
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
