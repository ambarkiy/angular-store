import { Component } from '@angular/core';
import { Store, StoreService } from './domain';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  store: Store;

  constructor(private storeService: StoreService) {
    this.store = this.storeService.get();
  }

}
