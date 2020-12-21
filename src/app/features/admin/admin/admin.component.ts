import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  storeInformationForm: FormGroup = this.formBuilder.group({
    brand: '',
    logo: '',
    phone: '',
    address: this.formBuilder.group({ street: '', zip: '', city: '' }),
    openingTime: this.formBuilder.group({ days: '', hours: '' }),
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  onSubmit() {
    const inputs = this.storeInformationForm.value;
    console.log(inputs);
  }

}
