import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HotelDTO } from '../dto';
import { HotelService } from '../service/hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  constructor(private hotelService: HotelService) { }

  public results(): Observable<HotelDTO[]> {
    return this.hotelService.results();
  }

  ngOnInit() {
    this.hotelService.getHotelsAll();
  }

}
