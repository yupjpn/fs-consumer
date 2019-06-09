import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import {Listing} from '../models/listing.model';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public savedListings: Array<Listing>;

  constructor(private navCtlr: NavController) {

  }

  navToExplore() {
    this.navCtlr.navigateForward('tabs/tab1');
  }

  navToListingDetails(listing: Listing) {
    this.navCtlr.navigateForward("listing-details", {
      queryParams: {
        rentalId: listing.id
      }
    });
  }

}
