import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { ReviewService } from './review.service';
import { ListingService } from './listing.service';
import { Review } from '../models/review.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User;

  constructor(reviewService: ReviewService, listingService: ListingService) {
    let reviews = Array<Review>();

    this.user = new User("Yuki", "Peters", "yukipeters@aol.com", "555-599-4628");
   }

   public setUser(user: User) {
     this.user = user;
   }

   public getUser() {
     return this.user;
   }

   getUsers() {
     // 1. Fetch all users
     // 2. Fetch all reviews for the following user Id's
   }
}
