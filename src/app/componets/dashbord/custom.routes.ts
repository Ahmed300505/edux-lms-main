import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'dashboard',children:[
 ]}
]
@NgModule({
    imports: [RouterModule.forChild(admin)],
    exports: [RouterModule],
  })
  export class customRoutingModule {
    static routes = admin;
  }