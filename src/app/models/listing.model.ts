import { User } from './user.model';

export class Listing {
    private listingName: string;
    private ownerName: string;
    private location: string;
    private imageLink: string;
    private price: number;
    private id: number;
    private saved: boolean;

    constructor(listingName: string, location: string, ownerName: string, imageLink: string, price: number, id: number, saved: boolean) {
        this.listingName = listingName;
        this.location = location;
        this.ownerName = ownerName;
        this.imageLink = imageLink;
        this.price = price;
        this.id = id;
        this.saved = saved;
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

    public setId(id: number) {
        this.id = id;
    }

    public setSaved(saved: boolean) {
        this.saved = saved;
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

    public  getId() {
        return this.id;
    }

    public  getSaved() {
        return this.saved;
    }

}