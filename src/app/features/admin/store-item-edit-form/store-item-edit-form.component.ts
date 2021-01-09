import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { StoreItem, StoreService } from '../../../domain';

@Component({
  selector: 'app-store-item-edit-form',
  templateUrl: './store-item-edit-form.component.html',
  styleUrls: ['./store-item-edit-form.component.scss']
})
export class StoreItemEditFormComponent implements OnInit {
  storeItem$: Observable<StoreItem | null>;
  params$: Observable<Params>;

  storeItemEditForm = this.fb.group({ name: '', price: '', description: '' });

  constructor(private fb: FormBuilder, private storeService: StoreService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.params$ = this.activatedRoute.queryParams;
    this.storeItem$ = this.activatedRoute.queryParams.pipe(
      switchMap(params => this.storeService.getItem(params.name))
      , tap((storeItem) => this.storeItemEditForm.patchValue({ ...storeItem }))
    );
  }

  onSubmit(storeItemId: number) {
    const storeItemInputs = this.storeItemEditForm.value;
    this.storeService.updateItem(storeItemId, storeItemInputs);
  }

}
