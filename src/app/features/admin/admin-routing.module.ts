import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { StoreEditFormComponent } from "./store-edit-form/store-edit-form.component";
import { StoreImagesComponent } from "./store-images/store-images.component";
import { StoreItemEditFormComponent } from "./store-item-edit-form/store-item-edit-form.component";

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'store-edit', component: StoreEditFormComponent },
  { path: 'store-item-edit', component: StoreItemEditFormComponent },
  { path: 'store-images', component: StoreImagesComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }