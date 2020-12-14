import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CguComponent } from './cgu/cgu.component';

const routes: Routes = [
  {
    path: '',
    component: CguComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class CguRoutingModule {}