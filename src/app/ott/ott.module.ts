import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OttRoutingModule } from './ott-routing.module';
import { OtthomeComponent } from './otthome/otthome.component';
import { OttheaderComponent } from './ottheader/ottheader.component';
import { OttfooterComponent } from './ottfooter/ottfooter.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AboutottComponent } from './aboutott/aboutott.component';
import { OttprivecyComponent } from './ottprivecy/ottprivecy.component';
import { OtttermsComponent } from './ottterms/ottterms.component';
import { OttcontactsComponent } from './ottcontacts/ottcontacts.component';


@NgModule({
  declarations: [
    OtthomeComponent,
    OttheaderComponent,
    OttfooterComponent,
    AboutottComponent,
    OttprivecyComponent,
    OtttermsComponent,
    OttcontactsComponent 
  ],
  imports: [
    CommonModule,
    OttRoutingModule,
    CarouselModule
  ]
})
export class OttModule { }
