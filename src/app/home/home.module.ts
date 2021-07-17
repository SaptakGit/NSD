import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component'; 
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeratingComponent } from './homerating/homerating.component';
import { HomenewsComponent } from './homenews/homenews.component';
import { HomeshowsComponent } from './homeshows/homeshows.component';
import { NeworatinglistComponent } from './neworatinglist/neworatinglist.component';
import { HomelatestComponent } from './homelatest/homelatest.component';
import { NeworatingdetailComponent } from './neworatingdetail/neworatingdetail.component';
import { InfluencerSignupComponent } from './influencer-signup/influencer-signup.component';
import { PriceComponent } from './price/price.component';
import { SubcriptionComponent } from './subcription/subcription.component';
import { GameComponent } from './game/game.component';


@NgModule({
  declarations: [
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    HomeratingComponent,
    HomenewsComponent,
    HomeshowsComponent,
    NeworatinglistComponent,
    HomelatestComponent,
    NeworatingdetailComponent,
    InfluencerSignupComponent,
    PriceComponent,
    SubcriptionComponent,
    GameComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,

    BrowserAnimationsModule,
    CarouselModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class HomeModule { }
