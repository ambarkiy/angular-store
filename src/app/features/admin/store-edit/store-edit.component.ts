import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store, StoreService } from 'src/app/domain';

@Component({
  selector: 'app-store-edit',
  templateUrl: './store-edit.component.html',
  styleUrls: ['./store-edit.component.scss']
})
export class StoreEditComponent implements OnInit {

  store: Store;

  storeInformationForm: FormGroup = this.formBuilder.group({
    brand: '',
    logo: '',
    phone: '',
    address: this.formBuilder.group({ street: '', zip: '', city: '' }),
    openingTime: this.formBuilder.group({ days: '', hours: '' }),
  });

  constructor(private formBuilder: FormBuilder, private storeService: StoreService) { }

  ngOnInit(): void {
    this.store = this.storeService.get();
    this.storeInformationForm.patchValue({...this.store})
  }

  onSubmit() {
    const inputs = this.storeInformationForm.value;
    console.log(inputs);
  }


}
