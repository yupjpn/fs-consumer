import { Component } from '@angular/core';
import { Listing } from '../models/listing.model';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  public listings: Array<Listing>;

  constructor(private navCtrl: NavController, private httpClient: HttpClient) {

    this.httpClient.get("http://localhost:3000/api/properties").subscribe(
      (response: any) => {
        console.log("Response from query:");
        console.log(response);

        // setting rentals array here equal to the array of all properties
        this.listings = response.rentals;
      }
    );
  }

  navToListingDetails(listing: Listing) {
    this.navCtrl.navigateForward("listing-details", {
      queryParams: {
        listingId: listing.id
      }
    });
  }

}
