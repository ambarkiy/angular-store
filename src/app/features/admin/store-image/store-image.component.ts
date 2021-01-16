import { Component, Input, OnInit } from '@angular/core';
import { StoreImage } from '../../../domain';

@Component({
  selector: 'app-store-image',
  templateUrl: './store-image.component.html',
  styleUrls: ['./store-image.component.scss']
})
export class StoreImageComponent implements OnInit {
  @Input() storeImage: StoreImage;

  constructor() { }

  ngOnInit(): void {
  }
}
