import { Component } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  scannedData: any;

  constructor(private barcodeScanner: BarcodeScanner) {}

   startScan() {
    const options: BarcodeScannerOptions = {
      preferFrontCamera: false,
      showFlipCameraButton: true,
      showTorchButton: true,
      torchOn: false,
      prompt: 'Scan your QR Code',
      resultDisplayDuration: 500,
      formats: 'QR_CODE',
      orientation: 'portrait',
    };

    this.barcodeScanner.scan(options).then(qrCodeData => {
      console.log('QR data', qrCodeData);
      this.scannedData = qrCodeData.text;

    }).catch(err => {
      console.log('Error in QR code scan', err);
    });
 }

}
