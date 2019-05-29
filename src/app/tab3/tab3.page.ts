import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import {Listing} from '../models/listing.model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  constructor(private navCtlr: NavController) {}

  navToExplore() {
    this.navCtlr.navigateForward('tabs/tab1');
  }

}
