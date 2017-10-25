import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedComponent } from './red/red.component';
import { BlueComponent } from './blue/blue.component';
import { GreenComponent } from './green/green.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { FrontCarouselComponent } from './front-carousel/front-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    RedComponent,
    BlueComponent,
    GreenComponent,
    SiteHeaderComponent,
    FrontCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
