import { Component, OnInit } from '@angular/core';
import { StoreItem, StoreService } from 'src/app/domain';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  storeItems: StoreItem[];

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.storeItems =this.storeService.getItems(); 
  }

}
