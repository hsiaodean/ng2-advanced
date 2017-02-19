
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { Page2Component } from './page2/page2.component';
// import { HomeComponent } from './home/home.component';
import { fallbackroute } from './shared/fallback-route';


const routes: Routes = [
  // {path:'', redirectTo:'/home', pathMatch:'full'},
  // {path: 'home',component: HomeComponent,},
  // {path:'page2',component: Page2Component},
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path:'dashboard',component: DashboardComponent},
  {path:'cards/:type',component: CardsComponent},
  {path:'charts/:username', loadChildren:'./charts/charts.module#ChartsModule'},
  
  fallbackroute
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }


// git config --global use.name yourname
// git config --global user.email youremail
