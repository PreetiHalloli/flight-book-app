import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
 
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '', 
    redirectTo:'/home',
    pathMatch: 'full'
  },
  {
    path: 'flights-list',
    component: FlightDetailsComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
