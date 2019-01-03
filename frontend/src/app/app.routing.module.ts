import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'hotel', pathMatch: 'full' },
  { path: 'hotel', loadChildren: './hotel/hotel.module#HotelModule' },
  { path: '**', redirectTo: 'hotel' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true, enableTracing: true, // <-- debugging purposes only
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
