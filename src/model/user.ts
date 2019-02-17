export class User {
    public id: Number;
    public name: String;
    public username: String;
    public email: String;
    public address_street: String;
    public address_suite: String;
    public address_city: String;
    public address_zipcode: String;
    public geo_lat: String;
    public geo_lng: String;

    public phone: String;
    public website: String;
    public company_name: String;
    public company_catchPhrase: String;
    public company_bs: String;

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.username = data.username;
        this.email = data.email;
        this.address_street = data.address.street;
        this.address_suite = data.address.suite;
        this.address_city = data.address.city;
        this.address_zipcode = data.address.zipcode;
        this.geo_lat = data.address.geo.lat;
        this.geo_lng = data.address.geo.lng;
        this.phone = data.phone;
        this.website = data.website;
        this.company_name = data.company.name;
        this.company_catchPhrase = data.company.catchPhrase;
        this.company_bs = data.company.bs;
    }
}