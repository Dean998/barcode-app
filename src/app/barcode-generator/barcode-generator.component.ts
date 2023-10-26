import { Component } from '@angular/core';
import { BarcodeService } from './barcode.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-barcode-generator',
  templateUrl: './barcode-generator.component.html',
  styleUrls: ['./barcode-generator.component.css'],
})
export class BarcodeGeneratorComponent {
  barcodeImage: any;
  url: string = '';

  constructor(private barcodeService: BarcodeService) {}

  generateBarcode() {
    this.barcodeService.getBarcode(this.url).subscribe((response: any) => {
      this.barcodeImage = response?.qrCodeImage;
    });
  }
}
