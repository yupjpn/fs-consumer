import { Injectable } from '@angular/core';
import { Listing } from '../models/listing.model';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  public listings: Array<Listing>;

  constructor() { 
    this.listings = new Array<Listing>();
  }

}
