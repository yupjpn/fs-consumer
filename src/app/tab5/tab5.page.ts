import { Component, OnInit } from '@angular/core';
import { Review } from '../models/review.model';
import { User } from '../models/user.model';
import { Listing } from '../models/listing.model';
import { UserService } from '../services/user.service';
import { ReviewService } from '../services/review.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  public user: User;
  // private reviews: Array<Review>;

  constructor(private httpClient: HttpClient) { 
    // this.reviews = reviewService.getReviews();

    const userId = localStorage.getItem("user_id");

        // there should be a userId because you can't get into the app without one
        this.httpClient.get("http://localhost:3000/api/users/" + userId).subscribe(
          (response: any) => {
            console.log(response);
    
            this.user = new User(response.user.firstName, response.user.lastName, response.user.email,
              response.user.password);
          }
        );
      }
  
  ngOnInit() {
  }

}
