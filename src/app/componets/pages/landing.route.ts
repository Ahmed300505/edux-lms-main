import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
export const land: Routes = [
    
]
@NgModule({
    imports: [RouterModule.forChild(land)],
    exports: [RouterModule],
  })
  export class landRoutingModule {
    static routes = land;
  }