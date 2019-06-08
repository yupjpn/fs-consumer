import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { ReviewService } from './review.service';
import { ListingService } from './listing.service';
import { Review } from '../models/review.model';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User;

  constructor(reviewService: ReviewService, listingService: ListingService, 
    private httpClient: HttpClient, private navCtrl: NavController) {
    let reviews = Array<Review>();

    this.user = new User("", "", "", "");
   }

   public setUser(user: User) {
     this.user = user;
   }

   public getUser() {
     return this.user;
   }
}
