import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ImgRegisterService {

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.initImgRegister();
  }

  private initImgRegister(): void {
    this.iconRegistry.addSvgIcon(
      'logo',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/logo.svg'));
  }
}
