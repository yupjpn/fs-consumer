import { Component, OnInit } from '@angular/core';
import { Review } from '../models/review.model';
import { User } from '../models/user.model';
import { Listing } from '../models/listing.model';
import { UserService } from '../services/user.service';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  private user: User;
  private reviews: Array<Review>;

  constructor(userService: UserService, reviewService: ReviewService) { 
    this.user = userService.getUser();
    this.reviews = reviewService.getReviews();
  }

  public setUser(user: User) {
    this.user = user;
  }

  public setReviews(reviews: Array<Review>) {
    this.reviews = reviews;
  }

  public getUser() {
    return this.user;
  }

  public getReviews() {
    return this.reviews;
  }
  
  ngOnInit() {
  }

}
