import { Component, OnInit } from '@angular/core';
import { Review } from '../models/review.model';
import { User } from '../models/user.model';
import { Listing } from '../models/listing.model';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  private reviewedListings: Array<Listing>;
  private allReviews: Array<Review>;

  constructor() { 
    // change this to service soon
    let listing1 = new Listing("Cozy Apartment in Sao Bento", "Lisbon, Portugal", "Miki",
    "https://t-ec.bstatic.com/images/hotel/max1024x768/839/83981934.jpg", 45, 1);
    let listing2 = new Listing("Apartment Near City Center", "Berlin, Germany", "Miki",
    "https://s-ec.bstatic.com/images/hotel/max1024x768/118/118469256.jpg", 45, 2);
    
    this.reviewedListings = new Array<Listing>();
    this.reviewedListings.push(listing1);
    this.reviewedListings.push(listing2);

    let yuki = new User("Yuki", "Peters", "Tokyo, Japan", new Array<Review>(), 
               this.reviewedListings, 2019, "yuki.peters@gmail.com", "9195994628");

    let review1 = new Review(yuki, listing1, "Sam", "This was a great apartment!", 5, "April 2019");
    let review2 = new Review(yuki, listing2, "Julian", "Terrible communication...", 1, "November 2018");

    this.allReviews = new Array<Review>();
    this.allReviews.push(review1);
    this.allReviews.push(review2);

    yuki.setReviews(this.allReviews);
  }

  ngOnInit() {
  }

}
