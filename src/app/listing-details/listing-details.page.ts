import { Component, OnInit } from '@angular/core';
import { Listing } from '../models/listing.model';
import { ActivatedRoute } from '@angular/router';
import { ListingService } from '../services/listing.service';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.page.html',
  styleUrls: ['./listing-details.page.scss'],
})
export class ListingDetailsPage implements OnInit {
  private listingId: number;
  public currentListing: Listing = new Listing("", "", 0, "", 0);

  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient,
    private navCtrl: NavController) { 
    
      let arrow = (data: any) => {
        this.listingId = data.params.listingId;  
  
        console.log(this.listingId);
                
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
    
  ngOnInit() {

  }

}
