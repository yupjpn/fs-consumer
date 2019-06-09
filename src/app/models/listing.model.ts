export class Listing {
    public name: string;
    public location: string;
    public price: number;
    public imageLink: string;
    public owner_id: number;
    public id: number;

    constructor(name: string, location: string, price: number, imageLink: string, owner_id: number) {
        this.name = name;
        this.location = location;
        this.price = price;
        this.imageLink = imageLink;
        this.owner_id = owner_id;
    }

}