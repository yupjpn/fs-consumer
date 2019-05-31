import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';

import {Listing} from '../models/listing.model';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { User } from '../models/user.model';
import { ListingService } from '../services/listing.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  private savedListings: Array<Listing>;

  constructor(private navCtlr: NavController, private listingService: ListingService) {
    console.log(this.listingService);

    this.savedListings = new Array<Listing>();

    // only add listings with saved values of true
    for (let listing of this.listingService.getListings()) {
      console.log("Hi")
      if (listing.getSaved() == true) {
        this.savedListings.push(listing);
      }
    }
  }

  public setSavedListings(savedListings: Array<Listing>) {
    this.savedListings = savedListings;
  }

  public getSavedListings() {
    return this.savedListings;
  }

  navToExplore() {
    this.navCtlr.navigateForward('tabs/tab1');
  }

  navToListingDetails(listing: Listing) {
    this.navCtlr.navigateForward("listing-details", {
      queryParams: {
        rentalName: listing.getListingName(),
        rentalId: listing.getId()
      }
    });
  }

}
