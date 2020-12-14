import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [TopNavigationComponent, FooterComponent],
  imports: [
    SharedModule
  ],
  exports: [TopNavigationComponent, FooterComponent]
})
export class LayoutModule { }
