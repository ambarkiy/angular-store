import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { StoreItem, StoreService } from '../../../domain';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  storeItems$: Observable<StoreItem[] | null>;

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.storeItems$ =this.storeService.getItems(); 
  }

}
