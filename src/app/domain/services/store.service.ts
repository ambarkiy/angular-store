import { Injectable } from '@angular/core';

import { LINKS, STORE, STORE_ITEMS } from '../data';
import { Link, Store, StoreItem } from '../models';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  get(): Store {
    return STORE;
  }

  getItems(): StoreItem[]{
    return STORE_ITEMS;
  }

  getFooterLinks(): Link[] {
    return LINKS;
  }
}
