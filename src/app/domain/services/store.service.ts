import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { LINKS, STORE, STORE_ITEMS } from '../data';
import { Link, Store, StoreItem } from '../models';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  _storeBS = new BehaviorSubject<Store>(STORE);

  constructor() {
  }

  get(): Observable<Store> {
    return this._storeBS.asObservable();
  }

  getItems(): StoreItem[] {
    return STORE_ITEMS;
  }

  getFooterLinks(): Link[] {
    return LINKS;
  }

  update(store: Store) {
    this._storeBS.next(store);
  }
}
