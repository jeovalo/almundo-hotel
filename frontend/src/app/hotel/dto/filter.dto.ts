
export class FilterDTO {
  public name: string;
  public stars: number[];
  public amenities: string[];

  constructor(name?: string, stars?: number[], amenities?: string[]) {
    this.name = name;
    this.stars = stars;
    this.amenities = amenities;
  }

  public getStars() {
    return this.stars.toString() || '';
  }

  public getAmenities() {
    return this.amenities.toString() || '';
  }

}
