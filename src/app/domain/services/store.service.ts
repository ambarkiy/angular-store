import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { LINKS, STORE, STORE_ITEMS } from '../data';
import { Link, Store, StoreItem } from '../models';

const API_URL = "http://localhost:4000/store";


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  _storeBS = new BehaviorSubject<Store>(STORE);

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<Store>(API_URL).toPromise().then(store => {
      this._storeBS.next(store);
    });
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
    this.httpClient.put<Store>(API_URL, store).toPromise().then(() => {
      this._storeBS.next(store);
    });

  }
}
