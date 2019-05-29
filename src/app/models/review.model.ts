import { User } from './user.model';
import { Listing } from './listing.model';

export class Review {
    private reviewer: User;
    private listing: Listing;
    private revieweeName: string;
    private reviewText: string;
    private numOfStars: number;
    private date: string;

    constructor(reviewer: User, listing: Listing, revieweeName: string, reviewText: string, numOfStars: number, date: string) {
        this.reviewer = reviewer;
        this.listing = listing;
        this.revieweeName = revieweeName;
        this.reviewText = reviewText;
        this.numOfStars = numOfStars;
        this.date = date;
    }

    public setReviewer(reviewer: User) {
        this.reviewer = reviewer;
    }

    public setListing(listing: Listing) {
        this.listing = listing;
    }

    public setReviewee(revieweeName: string) {
        this.revieweeName = revieweeName;
    }
    public setReviewText(reviewText: string) {
        this.reviewText = reviewText;
    }
    public setNumOfStars(numOfStars: number) {
        this.numOfStars = numOfStars;
    }

    public setDate(date: string) {
        this.date = date;
    }

    public getReviewer() {
        return this.reviewer;
    }

    public getListing() {
        return this.listing;
    }

    public getRevieweeName() {
        return this.revieweeName;
    }
    public getReviewText() {
        return this.reviewText;
    }
    public getNumOfStars() {
        return this.numOfStars;
    }

    public getDate() {
        return this.date;
    }
}