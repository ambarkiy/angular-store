import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Link, Store, StoreItem } from '../models';

const API_URL = "http://localhost:4000";


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  _storeBS = new BehaviorSubject<Store | null>(null);
  _storeItemsBS = new BehaviorSubject<StoreItem[]>([]);
  _footerLinksBS = new BehaviorSubject<Link[]>([]);

  constructor(private httpClient: HttpClient) {

    this.httpClient.get<Store>(`${API_URL}/store`).toPromise().then(store => {
      this._storeBS.next(store);
    });

    this.httpClient.get<StoreItem[]>(`${API_URL}/store-items`).toPromise().then(storeItems => {
      storeItems = storeItems.map(item => {
        item.img = `${API_URL}/images/${item.img || 'place-holder.png'}`;
        return item;
      });
      this._storeItemsBS.next(storeItems);
    });

    this.httpClient.get<Link[]>(`${API_URL}/store-footer-links`).toPromise().then(links => {
      this._footerLinksBS.next(links);
    });

  }

  get(): Observable<Store | null> {
    return this._storeBS.asObservable();
  }

  getItem(name: string): Observable<StoreItem | null> {
    return this.getItems().pipe(map(items => { return items.find(item => item.name === name) || null }));
  }


  getItems(): Observable<StoreItem[]> {
    return this._storeItemsBS.asObservable();
  }

  getFooterLinks(): Observable<Link[]> {
    return this._footerLinksBS.asObservable();
  }

  update(store: Store) {
    this.httpClient.put<Store>(`${API_URL}/store`, store).toPromise().then(() => {
      this._storeBS.next(store);
    });

  }
  //TODO : ask if this is the good way
  updateItem(storeItemId: number, storeItem: StoreItem) {
    this.httpClient.patch<StoreItem>(`${API_URL}/store-items/${storeItemId}`, storeItem).toPromise().then(() => {
      this.httpClient.get<StoreItem[]>(`${API_URL}/store-items`).toPromise().then(storeItems => {
        this._storeItemsBS.next(storeItems);
      });
    });

  }

}
