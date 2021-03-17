import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  async startScan() {
    const { BarcodeScanner } = Plugins;

      // check or request permission
    const status = await BarcodeScanner.checkPermission({ force: true });

    if (status.granted) {
    BarcodeScanner.hideBackground(); // make background of WebView transparent

    const result = await BarcodeScanner.startScan({ targetedFormats: ['QR_CODE'] }); // start scanning and wait for a result

    // if the result has content
    if (result.hasContent) {
      console.log(result.content); // log the raw scanned content
    }
  }
 }

}
