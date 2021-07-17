import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{ OtthomeComponent } from './otthome/otthome.component';

const routes: Routes = [
  {path:'otthome', component:OtthomeComponent }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OttRoutingModule { }
