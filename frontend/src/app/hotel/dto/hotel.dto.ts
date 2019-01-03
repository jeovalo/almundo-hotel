export class HotelDTO {
  private id: string;
  public name: string;
  public stars: number;
  public price: number;
  public image: string;
  public srcImage: string;
  public amenities: string[];

  constructor(id: string, name: string, stars: number, price: number, image: string, amenities: string[]) {
    this.id = id;
    this.name = name;
    this.stars = stars;
    this.price = price;
    this.image = image;
    this.amenities = amenities;
  }

  public getAmenities() {
    return this.amenities.toString() || '';
  }

}
