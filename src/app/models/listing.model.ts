import { User } from './user.model';

export class Listing {
    private listingName: string;
    private owner: User;
    private location: string;
    private imageLink: string;
    private price: number;

    constructor(listingName: string, location: string, owner: User, imageLink: string, price: number) {
        this.listingName = listingName;
        this.location = location;
        this.owner = owner;
        this.imageLink = imageLink;
        this.price = price;
    }

    public setListingName(listingName: string) {
        this.listingName = listingName;
    }

    public setLocation(location: string) {
        this.location = location;
    }

    public setOwnerName(owner: User) {
        this.owner = owner;
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

    public getOwnerName() {
        return this.owner;
    }

    public getImageLink() {
        return this.imageLink;
    }

    public  getPrice() {
        return this.price;
    }

}