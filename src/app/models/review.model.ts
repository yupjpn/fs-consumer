import { User } from './user.model';
import { Listing } from './listing.model';

export class Review {
    private reviewer: User;
    private listing: Listing;
    private reviewee: User;
    private reviewText: string;
    private numOfStars: number;

    constructor(reviewer: User, listing: Listing, reviewText: string, numOfStars: number) {
        this.reviewer = reviewer;
        this.listing = listing;
        this.reviewee = listing.getOwner();
        this.reviewText = reviewText;
        this.numOfStars = numOfStars;
    }

    public setReviewer(reviewer: User) {
        this.reviewer = reviewer;
    }

    public setListing(listing: Listing) {
        this.listing = listing;
    }

    public setReviewee(reviewee: User) {
        this.reviewee = reviewee;
    }
    public setReviewText(reviewText: string) {
        this.reviewText = reviewText;
    }
    public setNumOfStars(numOfStars: number) {
        this.numOfStars = numOfStars;
    }

    public getReviewer() {
        return this.reviewer;
    }

    public getListing() {
        return this.listing;
    }

    public getReviewee() {
        return this.reviewee;
    }
    public getReviewText() {
        return this.reviewText;
    }
    public getNumOfStars() {
        return this.numOfStars;
    }

}