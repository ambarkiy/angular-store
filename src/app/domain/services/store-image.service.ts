import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Observable } from "rxjs";
import { StoreImage } from "../models";

const IMAGES_API = "http://localhost:3000";
const API_URL = "http://localhost:4000";

@Injectable({
    providedIn: 'root'
})
export class StoreImageService {
    _storeImageItemsBS = new BehaviorSubject<StoreImage[]>([]);
    constructor(private httpClient: HttpClient) {
        this.httpClient.get<StoreImage[]>(`${IMAGES_API}/store-images`).toPromise().then(storeImageItems => {
            //normalize url for server
            storeImageItems = storeImageItems.map(image => {
                let storeImage: StoreImage = { ...image };
                storeImage.img = `${API_URL}/images/${storeImage.name}`
                return storeImage;
            });
            this._storeImageItemsBS.next(storeImageItems);
        });
    }

    getItems(): Observable<StoreImage[]> {
        return this._storeImageItemsBS.asObservable();
    }

    addItems(formData: FormData): void {
        this.httpClient.post(`${IMAGES_API}/store-images`, formData).toPromise().then(
            () => {
                this.httpClient.get<StoreImage[]>(`${IMAGES_API}/store-images`).toPromise().then(storeImageItems => {
                    //normalize url for server
                    storeImageItems = storeImageItems.map(image => {
                        let storeImage: StoreImage = { ...image };
                        storeImage.img = `${API_URL}/images/${storeImage.name}`
                        return storeImage;
                    });
                    this._storeImageItemsBS.next(storeImageItems);
                });
            }

        );

    }

    deleteItem(storeImage:StoreImage):void{
        console.log(storeImage);
        this.httpClient.delete(`${IMAGES_API}/store-images/${storeImage.name}`).toPromise().then(
            () => {
                this.httpClient.get<StoreImage[]>(`${IMAGES_API}/store-images`).toPromise().then(storeImageItems => {
                    //normalize url for server
                    storeImageItems = storeImageItems.map(image => {
                        let storeImage: StoreImage = { ...image };
                        storeImage.img = `${API_URL}/images/${storeImage.name}`
                        return storeImage;
                    });
                    this._storeImageItemsBS.next(storeImageItems);
                });
            }

        );
    }
}