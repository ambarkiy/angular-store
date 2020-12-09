import { Injectable } from '@angular/core';
import { STORE } from '../data/store.data';
import { Store } from '../models/store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  get(): Store {
    return STORE;
  }
}
