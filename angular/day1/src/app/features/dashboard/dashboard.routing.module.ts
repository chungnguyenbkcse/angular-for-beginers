import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const dashboardsRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard', component: DashboardComponent,
    data: {
      pageTitle: "Dashboard", router: true
    }
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(dashboardsRoutes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
