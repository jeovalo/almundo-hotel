import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FilterDTO } from '../dto';
import { HotelService } from '../service/hotel.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, AfterViewInit {

  constructor(private hotelService: HotelService) { }

  ngOnInit() {
  }

  public updateFilter(filter: FilterDTO) {
    this.hotelService.search(filter);
  }

  ngAfterViewInit(): void {
  }




}
