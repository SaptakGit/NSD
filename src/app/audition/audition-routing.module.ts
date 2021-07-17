import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutauditionComponent } from './aboutaudition/aboutaudition.component';

import { AuditionFormComponent } from "./audition-form/audition-form.component";
import { AuditioncategoriesComponent } from './auditioncategories/auditioncategories.component';
import { AuditionjudgesComponent } from './auditionjudges/auditionjudges.component';
import { AuditiontcComponent } from './auditiontc/auditiontc.component';
import { UpcomingauditionComponent } from './upcomingaudition/upcomingaudition.component';

// import { AuthguardGuard } from '../authguard.guard';

const routes: Routes = [
  {path:'auditionform', component:AuditionFormComponent},
  {path:'aboutaudition', component:AboutauditionComponent},
  {path:'auditioncategories', component:AuditioncategoriesComponent},
  {path:'auditionjudges', component:AuditionjudgesComponent},
  {path:'upcomingaudition', component:UpcomingauditionComponent},
  {path:'auditiontermsandconditions', component:AuditiontcComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditionRoutingModule { }
