import { Injectable } from '@angular/core';
import { Review } from '../models/review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  
  public reviews: Array<Review>;

  constructor() {
    this.reviews = new Array<Review>();
    
    // let review1 = new Review(listingService.getListings()[0], "Henry", "The apartment is very nice and comfortable! Location is very convenient, near shops and public transport. Henry was very helpful and friendly, he’s a super host!",
    // 5, "March 2019");
    // let review2 = new Review(listingService.getListings()[1], "Pam", "Pam is incredible. He was very accommodating and very quick to respond with any questions. He is also flexible with check-in and check-out time, which was extremely helpful. The place was very clean and had all of the necessities for a few night stay.",
    // 4, "January 2019");
    // let review3 = new Review(listingService.getListings()[2], "Jim", "Very tidy and lovely AirBnb apartment equipped with everything you need. A good bed and nice bathroom. Jim is a great host and there when you need him, Very nice and wants to share all hé know about the area. We had a great stay!",
    // 5, "December 2018");

    // this.reviews.push(review1);
    // this.reviews.push(review2);
    // this.reviews.push(review3);
   }

}
