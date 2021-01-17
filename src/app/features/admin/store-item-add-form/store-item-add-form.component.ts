import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StoreService } from '../../../domain';

@Component({
  selector: 'app-store-item-add-form',
  templateUrl: './store-item-add-form.component.html',
  styleUrls: ['./store-item-add-form.component.scss']
})
export class StoreItemAddFormComponent implements OnInit {
  storeItemEditForm = this.fb.group({ name: '', price: '', description: '' });

  constructor(private fb: FormBuilder, private storeService: StoreService, ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const storeItemInputs = this.storeItemEditForm.value;
    this.storeService.addItem(storeItemInputs);
  }

}
