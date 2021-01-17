import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreItem } from '../../../domain';
import { StoreService } from '../../../domain/services';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  storeItems$: Observable<StoreItem[] | null>;


  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.storeItems$ = this.storeService.getItems();
  }


  addStoreItem(storeItem: StoreItem): void {
    this.storeService.addItem(storeItem);
  }
}
