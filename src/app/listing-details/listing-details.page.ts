import { Component, OnInit } from '@angular/core';
import { Listing } from '../models/listing.model';
import { ActivatedRoute } from '@angular/router';
import { ListingService } from '../services/listing.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.page.html',
  styleUrls: ['./listing-details.page.scss'],
})
export class ListingDetailsPage implements OnInit {
  private listingId: number;
  private listingName: string;
  private currentListing: Listing;

  constructor(private activatedRoute: ActivatedRoute, private listingService: ListingService,
    private navCtrl: NavController) { 
      let arrow = (data: any) => {
        this.listingName = data.params.rentalName;
        this.listingId = data.params.rentalId;  
  
        console.log(this.listingName);
        console.log(this.listingId);
        
        this.currentListing = this.listingService.findListingById(this.listingId);
  
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
