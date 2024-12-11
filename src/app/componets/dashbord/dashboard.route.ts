import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'dashboard',children:[
  

{
  path: 'personal',
  loadComponent: () =>
    import('./personal/personal.component').then((m) => m.PersonalComponent),
},
]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class dashboardRoutingModule {
  static routes = admin;
}
