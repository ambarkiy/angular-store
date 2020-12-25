import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-store-edit',
  templateUrl: './store-edit.component.html',
  styleUrls: ['./store-edit.component.scss']
})
export class StoreEditComponent implements OnInit {
  storeInformationForm: FormGroup = this.formBuilder.group({
    brand: '',
    logo: '',
    phone: '',
    address: this.formBuilder.group({ street: '', zip: '', city: '' }),
    openingTime: this.formBuilder.group({ days: '', hours: '' }),
  });
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const inputs = this.storeInformationForm.value;
    console.log(inputs);
  }


}
