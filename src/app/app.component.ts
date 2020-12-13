import { Component, OnInit } from '@angular/core';
import { ImgRegisterService } from './common';
import { Link, Store, StoreService } from './domain';
import { StoreItem } from './domain/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  store: Store;
  links: Link[];
  color: string;
  storeItem: StoreItem;

  // TODO: remove dependency to ImgRegisterService
  constructor(private storeService: StoreService, private imgRegisterService: ImgRegisterService) {

  }

  ngOnInit(): void {
    this.store = this.storeService.get();
    this.color = 'primary';
    this.links = this.storeService.getFooterLinks();
    this.storeItem = { name: 'Végétarienne', price: 10, description: 'Base tomate, mozzarella, champignons frais, oignons frais, poivrons, tomates fraîches', img: '/assets/images/store/pizzas-vegetarienne.png' };
  }

}
