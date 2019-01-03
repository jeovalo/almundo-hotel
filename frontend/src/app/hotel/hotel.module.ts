import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { HotelFilterComponent } from './hotel-filter/hotel-filter.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelRoutingModule } from './hotel-routing.module';
import { NofoundComponent } from './nofound/nofound.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HotelRoutingModule
  ],
  declarations: [HotelListComponent, HotelDetailComponent, HotelFilterComponent, NofoundComponent, HomeComponent, LayoutComponent]
})
export class HotelModule { }
