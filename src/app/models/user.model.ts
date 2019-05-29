import { Review } from './review.model';
import { Listing } from './listing.model';


export class User {
    private firstName: string;
    private lastName: string;
    private location: string;
    private reviews: Array<Review>;
    private listingsStayedAt: Array<Listing>;
    private joinYear: number;
    private email: string;
    private phoneNumber: string;

    constructor(firstName: string, lastName: string, location: string, reviews: Array<Review>, listingsStayedAt: Array<Listing>, joinYear: number, email: string, phoneNumber: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.location = location;
        this.reviews = reviews;
        this.listingsStayedAt = listingsStayedAt;
        this.joinYear = joinYear;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    public setFirstName(listingName: string) {
        this.firstName = this.firstName;
    }

    public setLastName(lastName: string) {
        this.lastName = this.lastName;
    }

    public setLocation(location: string) {
        this.location = location;
    }

    public setReviews(reviews: Array<Review>) {
        this.reviews = reviews;
    }

    public setListingsStayedAt(listingsStayedAt: Array<Listing>) {
        this.listingsStayedAt = listingsStayedAt;
    }

    public setJoinYear(joinYear: number) {
        this.joinYear = joinYear;
    }

    public setEmail(email: string) {
        this.email = email;
    }

    public setPhoneNumber(phoneNumber: string) {
        this.phoneNumber = phoneNumber;
    }

    public getFirstName() {
        return this.firstName;
    }

    public getLastName() {
        return this.lastName;
    }

    public getLocation() {
        return this.location;
    }

    public getReviews() {
        return this.reviews;
    }

    public getListingsStayedAt() {
        return this.listingsStayedAt;
    }

    public getJoinYear() {
        return this.joinYear;
    }

    public getEmail() {
        return this.email;
    }

    public getPhoneNumber() {
        return this.phoneNumber;
    }

}