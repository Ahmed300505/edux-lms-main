
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authenticationRoutingModule } from '../../componets/authentication/authentication.route';
import { errorRoutingModule } from '../../componets/error/error.route';
import { landRoutingModule } from '../../componets/pages/landing.route';

export const authen: Routes = [
  {
    path: '',
    children: [
 
       ...authenticationRoutingModule.routes,
       ...errorRoutingModule.routes,
       ...landRoutingModule.routes,
    ],
  },
];
@NgModule({
  imports: [],
  exports: [RouterModule],
})
export class SaredRoutingModule {}
