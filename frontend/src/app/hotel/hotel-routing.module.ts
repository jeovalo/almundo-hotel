import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { LayoutComponent } from './layout/layout.component';
import { NofoundComponent } from './nofound/nofound.component';

const routesHijos: Routes = [
  { path: 'list',  component: HotelListComponent },
  { path: 'nofound',  component: NofoundComponent },
  { path: 'home',  component: HomeComponent},
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: '**', redirectTo: 'nofound', pathMatch: 'full' }
];


const routes: Routes = [
  {path: '', component: LayoutComponent, children: routesHijos}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoutingModule { }
