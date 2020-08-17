import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';
import { ComponentsComponent } from './components/components.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeBannerComponent } from './Components/home-banner/home-banner.component';
import { MainComponent } from './Components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    ComponentsComponent,
    FooterComponent,
    HomeBannerComponent,
    MainComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
