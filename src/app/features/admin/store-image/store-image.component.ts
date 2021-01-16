import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StoreImage } from '../../../domain';

@Component({
  selector: 'app-store-image',
  templateUrl: './store-image.component.html',
  styleUrls: ['./store-image.component.scss']
})
export class StoreImageComponent implements OnInit {
  @Input() storeImage: StoreImage;
  @Output() delete = new EventEmitter<StoreImage>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteStoreImage(storeImage: StoreImage): void {
    this.delete.emit(storeImage);
  }
}
