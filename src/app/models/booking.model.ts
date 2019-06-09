export class Booking {
    public user_id: number;
    public property_id: number;
    public date_from: string;
    public date_to: string;
    public status: string;

    constructor(user_id: number, property_id: number, date_from: string, date_to: string) {
        this.user_id = user_id;
        this.property_id = property_id;
        this.date_from = date_from;
        this.date_to = date_to;
        this.status = "NEW";
    }

}