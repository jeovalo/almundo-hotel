import { Component, Input, OnInit } from '@angular/core';
import { HotelDTO } from '../dto';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {
  @Input() hotel: HotelDTO;

  constructor() {}

  ngOnInit() {
  }

}
