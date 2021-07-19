import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{ OtthomeComponent } from './otthome/otthome.component';
import{ AboutottComponent } from './aboutott/aboutott.component';
import{ OttprivecyComponent } from './ottprivecy/ottprivecy.component';
import{ OtttermsComponent } from './ottterms/ottterms.component'
import { OttcontactsComponent } from './ottcontacts/ottcontacts.component';

const routes: Routes = [
  {path:'otthome', component:OtthomeComponent },
  {path:'aboutott', component:AboutottComponent },
  {path:'ottprivecy', component:OttprivecyComponent},
  {path:'ottterms', component:OtttermsComponent},
  {path:'ottcontact', component:OttcontactsComponent}
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OttRoutingModule { }
