import { Component, Input, OnInit } from '@angular/core';
import { StoreItem } from '../../../domain';

@Component({
  selector: 'app-store-item-edit',
  templateUrl: './store-item-edit.component.html',
  styleUrls: ['./store-item-edit.component.scss']
})
export class StoreItemEditComponent implements OnInit {

@Input() storeItem : StoreItem;
  constructor() { }

  ngOnInit(): void {
  }

}
