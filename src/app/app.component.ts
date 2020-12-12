import { Component, OnInit } from '@angular/core';
import { ImgRegisterService } from './common';
import { Link, Store, StoreService } from './domain';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  store: Store;
  links: Link[];
  color: string;

  // TODO: remove dependency to ImgRegisterService
  constructor(private storeService: StoreService, private imgRegisterService: ImgRegisterService) {

  }

  ngOnInit(): void {
    this.store = this.storeService.get();
    this.color = 'primary';
    this.links = this.storeService.getFooterLinks();
  }

}
