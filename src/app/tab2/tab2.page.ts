import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import {Listing} from '../models/listing.model';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { User } from '../models/user.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public savedListings: Array<Listing>;

  constructor(private navCtlr: NavController) {
    this.savedListings = new Array<Listing>();
    
    let listing1 = new Listing("Smart, Stylish Apartment in the Heart of Budapest", 
    "Budapest, Hungary", "Mihaly", "https://t-ec.bstatic.com/images/hotel/max1024x768/790/79071394.jpg", 56);
    let listing2 = new Listing("Romantic, Lakeside Hone with Views of Lake Como", 
    "Menaggio, Lombardy, Italy", "Paola", "https://images.micazu.nl/_images/house/21619/images/luxe_appartement_san_andrea_menaggio-1-6148.jpg?crop=0,0,639,480&width=800&height=533&mode=crop&scale=both", 146);
    let listing3 = new Listing("Joshua Tree Homesteader Cabin", 
    "Joshua Tree, California, USA", "Stephanie & Jay", "https://www.wellandgood.com/wp-content/uploads/2017/12/joshua-tree-airbnb-rental-2.jpg", 107);

    this.savedListings.push(listing1);
    this.savedListings.push(listing2);
    this.savedListings.push(listing3);
  }

  navToExplore() {
    this.navCtlr.navigateForward('tabs/tab1');
  }

}
