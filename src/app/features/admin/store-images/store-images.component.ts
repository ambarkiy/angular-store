import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { StoreImage, StoreImageService } from '../../../domain';

@Component({
  selector: 'app-store-images',
  templateUrl: './store-images.component.html',
  styleUrls: ['./store-images.component.scss']
})
export class StoreImagesComponent implements OnInit {
  storeImageForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  storeImageItems$: Observable<StoreImage[]>;
  @ViewChild('uploadFileInput') uploadFileInput: ElementRef;

  constructor(private storeImageService: StoreImageService) { }

  ngOnInit(): void {
    this.storeImageItems$ = this.storeImageService.getItems();
  }

  onSelectedFiles(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files;
      this.storeImageForm.patchValue({ fileSource: file });
      this.uploadFiles();
    }
  }

  uploadFiles() {
    const formData = new FormData();
    const fileSource = this.storeImageForm.get('fileSource') as any;
    if (fileSource != null) {
      for (const file of fileSource.value) {
        formData.append('file', file);
      }
    }
    this.storeImageService.addItems(formData);
  }

  simulateInputFileClick() {
    this.uploadFileInput.nativeElement.click();
  }

  onDeleteStoreImage(storeImage: StoreImage): void {
    this.storeImageService.deleteItem(storeImage);
  }
}


