import { Component, OnInit } from '@angular/core';
import { Booking } from '../models/booking.model';
import { AlertController, NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Listing } from '../models/listing.model';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.page.html',
  styleUrls: ['./new-booking.page.scss'],
})
export class NewBookingPage implements OnInit {

  public booking: Booking;
  public listingId: number;
  public currentListing: Listing = new Listing("", "", 0, "", 0);
  public userId: number;

  constructor(private alertCtrl: AlertController, private httpClient: HttpClient,
    private navCtrl: NavController, private activatedRoute: ActivatedRoute) {
    this.booking = new Booking(0, 0, "", "");

    this.userId = parseInt(localStorage.getItem("user_id"));

    this.booking.user_id = this.userId;
    
    let arrow = (data: any) => {
      // URL parameter (property ID is now in instance variable listingId)
      this.listingId = data.params.listingId;  

      console.log(this.listingId);

      this.booking.property_id = this.listingId;
              
      this.httpClient.get("http://localhost:3000/api/properties/propertyId/" + this.listingId).subscribe(
        (response: any) => {
          console.log("Response from query:");
          console.log(response);
  
          // setting rentals array here equal to the array of properties
          // returned by the query
          this.currentListing = response.rental;
        }
      );

      if (! this.currentListing) {
        alert("Listing not found!");
        this.navCtrl.navigateBack("main/tabs/tab1");
      }
    
    };

    this.activatedRoute.queryParamMap.subscribe(arrow);
   }

   async presentAlert() {
    const alert = await this.alertCtrl.create({
    header: "Error",
    subHeader: "Could not create a new booking.",
    buttons: ['Dismiss']
    });
    await alert.present(); 
}

  // this function only gets called once the four registration fields have been filled
  submit() {
    console.log("Submitting to the server...");
    console.log(this.booking);
    
      this.httpClient.post("http://localhost:3000/api/bookings", this.booking).subscribe(
        (response: any) => {
          console.log(response);
          this.navToExplore();
        },
        (err) => {
          console.log(err);
          this.presentAlert();
        }
      );      
  } 

  navToExplore() {
    this.navCtrl.navigateForward("tabs");
  }

  ngOnInit() {
  }

}
