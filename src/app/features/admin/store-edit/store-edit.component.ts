import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Store, StoreService } from '../../../domain';

@Component({
  selector: 'app-store-edit',
  templateUrl: './store-edit.component.html',
  styleUrls: ['./store-edit.component.scss']
})
export class StoreEditComponent implements OnInit {

  store$: Observable<Store | null>;

  storeInformationForm: FormGroup = this.formBuilder.group({
    brand: '',
    logo: '',
    phone: '',
    address: this.formBuilder.group({ street: '', zip: '', city: '' }),
    openingTime: this.formBuilder.group({ days: '', hours: '' }),
  });

  constructor(private formBuilder: FormBuilder, private storeService: StoreService) { }

  ngOnInit(): void {
    this.store$ = this.storeService.get().pipe(tap((store)=>  this.storeInformationForm.patchValue({ ...store })));
  }

  onSubmit() {
    const storeInputs = this.storeInformationForm.value;
    this.storeService.update(storeInputs);
  }


}
