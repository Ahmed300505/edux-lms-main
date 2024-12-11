import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { dashboardRoutingModule } from '../../componets/dashbord/dashboard.route';

export const content: Routes = [
  {
    path: '',
    children: [
      ...dashboardRoutingModule.routes,
     
    ],
  },
];
@NgModule({
  imports: [],
  exports: [RouterModule],
})
export class SaredRoutingModule {}
