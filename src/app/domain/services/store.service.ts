import { Injectable } from '@angular/core';

import { LINKS, STORE, STORE_ITEMS } from '../data';
import { Link, Store, StoreItem } from '../models';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  _store: Store;

  constructor() {
    this._store = STORE;
  }

  get(): Store {
    return this._store;
  }

  getItems(): StoreItem[] {
    return STORE_ITEMS;
  }

  getFooterLinks(): Link[] {
    return LINKS;
  }

  update(store: Store) {
    this._store = store;
  }
}
