import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CgvComponent } from './cgv/cgv.component';

const routes: Routes = [
  {
    path: '',
    component: CgvComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class CgvRoutingModule {}