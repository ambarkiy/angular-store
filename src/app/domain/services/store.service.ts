import { Injectable } from '@angular/core';

import { LINKS, STORE } from '../data';
import { Link, Store } from '../models';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  get(): Store {
    return STORE;
  }

  getFooterLinks(): Link[] {
    return LINKS;
  }
}
