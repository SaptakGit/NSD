import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AuditionRoutingModule } from './audition-routing.module';
import { AuditionFormComponent } from './audition-form/audition-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AboutauditionComponent } from './aboutaudition/aboutaudition.component';
import { AuditioncategoriesComponent } from './auditioncategories/auditioncategories.component';
import { AuditionjudgesComponent } from './auditionjudges/auditionjudges.component';
import { UpcomingauditionComponent } from './upcomingaudition/upcomingaudition.component';
import { AuditiontcComponent } from './auditiontc/auditiontc.component';
import { AuditionheaderComponent } from './auditionheader/auditionheader.component';
import { AuditionfooterComponent } from './auditionfooter/auditionfooter.component';
 

@NgModule({
  declarations: [
    // FormComponent,
    AuditionFormComponent,
    AboutauditionComponent,
    AuditioncategoriesComponent,
    AuditionjudgesComponent,
    UpcomingauditionComponent,
    AuditiontcComponent,
    AuditionheaderComponent,
    AuditionfooterComponent
  ],
  imports: [
    CommonModule,
    AuditionRoutingModule,
    BrowserAnimationsModule,
    CarouselModule ,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot()
  ],
  
  exports:[
  
    AuditionFormComponent
  ]
})
export class AuditionModule { }
