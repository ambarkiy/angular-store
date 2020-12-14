import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { StoreItemComponent } from './store-item/store-item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MenuRoutingModule } from './menu-routing.module';



@NgModule({
  declarations: [MenuComponent, StoreItemComponent],
  imports: [
    SharedModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
