import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Link, Store, StoreItem } from '../models';

const API_URL = "http://localhost:4000";


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  _storeBS = new BehaviorSubject<Store | null>(null);
  _storeItemsBS = new BehaviorSubject<StoreItem[] | null>(null);
  _footerLinksBS = new BehaviorSubject<Link[] | null>(null);

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<Store>(`${API_URL}/store`).toPromise().then(store => {
      this._storeBS.next(store);
    });
    this.httpClient.get<StoreItem[]>(`${API_URL}/store-items`).toPromise().then(storeItems => {
      this._storeItemsBS.next(storeItems);
    });
    this.httpClient.get<Link[]>(`${API_URL}/store-footer-links`).toPromise().then(links => {
      this._footerLinksBS.next(links);
    });

  }

  get(): Observable<Store | null> {
    return this._storeBS.asObservable();
  }

  getItems(): Observable<StoreItem[] | null> {
    return this._storeItemsBS.asObservable();
  }

  getFooterLinks(): Observable<Link[] | null> {
    return this._footerLinksBS.asObservable();
  }

  update(store: Store) {
    this.httpClient.put<Store>(`${API_URL}/store`, store).toPromise().then(() => {
      this._storeBS.next(store);
    });

  }
}
