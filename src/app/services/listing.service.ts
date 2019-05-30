import { Injectable } from '@angular/core';
import { Listing } from '../models/listing.model';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  private listings: Array<Listing>;

  constructor() { 
    this.listings = new Array<Listing>();

    // listing1 is saved, listing2 is not, listing3 is saved
    let listing1 = new Listing("Smart, Stylish Apartment in the Heart of Budapest", 
    "Budapest, Hungary", "Mihaly", "https://t-ec.bstatic.com/images/hotel/max1024x768/790/79071394.jpg", 56, 1, true);
    let listing2 = new Listing("Romantic, Lakeside Hone with Views of Lake Como", 
    "Menaggio, Lombardy, Italy", "Paola", "https://images.micazu.nl/_images/house/21619/images/luxe_appartement_san_andrea_menaggio-1-6148.jpg?crop=0,0,639,480&width=800&height=533&mode=crop&scale=both", 
    146, 2, false);
    let listing3 = new Listing("Joshua Tree Homesteader Cabin", 
    "Joshua Tree, California, USA", "Stephanie & Jay", "https://www.wellandgood.com/wp-content/uploads/2017/12/joshua-tree-airbnb-rental-2.jpg", 
    107, 3, true);

    this.listings.push(listing1);
    this.listings.push(listing2);
    this.listings.push(listing3);
  }

  getListings() {
    return this.listings;
  }

  // Takes in a rental's unique ID and returns corresponding Rental object.
  // If unique ID is not mapped to any Rental object, then return null
  findListingById(id: number): Listing {
    let foundListing: Listing = null;

    this.listings.forEach(
      (listing: Listing) => {
        if (listing.getId() == id) {
          foundListing = listing;
          console.log("Found listing");
        }
      }
    );

    return foundListing;
  }

}
