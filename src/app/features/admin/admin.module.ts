import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { StoreEditFormComponent } from './store-edit-form/store-edit-form.component';
import { StoreItemEditComponent } from './store-item-edit/store-item-edit.component';
import { StoreItemEditFormComponent } from './store-item-edit-form/store-item-edit-form.component';

@NgModule({
  declarations: [AdminComponent, StoreEditFormComponent, StoreItemEditComponent, StoreItemEditFormComponent],
  imports: [
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
