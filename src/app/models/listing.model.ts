import { User } from './user.model';

export class Listing {
    private listingName: string;
    private ownerName: string;
    private location: string;
    private imageLink: string;
    private price: number;

    constructor(listingName: string, location: string, ownerName: string, imageLink: string, price: number) {
        this.listingName = listingName;
        this.location = location;
        this.ownerName = ownerName;
        this.imageLink = imageLink;
        this.price = price;
    }

    public setListingName(listingName: string) {
        this.listingName = listingName;
    }

    public setLocation(location: string) {
        this.location = location;
    }

    public setOwner(ownerName: string) {
        this.ownerName = ownerName;
    }
    public setImageLink(imageLink: string) {
        this.imageLink = imageLink;
    }
    public setPrice(price: number) {
        this.price = price;
    }

    public getListingName() {
        return this.listingName;
    }

    public getLocation() {
        return this.location;
    }

    public getOwner() {
        return this.ownerName;
    }

    public getImageLink() {
        return this.imageLink;
    }

    public  getPrice() {
        return this.price;
    }

}