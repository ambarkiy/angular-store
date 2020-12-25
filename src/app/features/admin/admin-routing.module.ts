import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { StoreEditComponent } from "./store-edit/store-edit.component";

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'store-edit', component: StoreEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }