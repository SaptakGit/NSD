import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OttRoutingModule } from './ott-routing.module';
import { OtthomeComponent } from './otthome/otthome.component';
import { OttheaderComponent } from './ottheader/ottheader.component';
import { OttfooterComponent } from './ottfooter/ottfooter.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    OtthomeComponent,
    OttheaderComponent,
    OttfooterComponent 
  ],
  imports: [
    CommonModule,
    OttRoutingModule,
    CarouselModule
  ]
})
export class OttModule { }
