import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PricingComponent } from './pricing/pricing.component';
import { BrokerComponent } from './broker/broker.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SliderComponent } from './slider/slider.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProfitComponent } from './profit/profit.component';
import { DematComponent } from './demat/demat.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardviewComponent } from './dashboardview/dashboardview.component';
import { UserviewComponent } from './userview/userview.component';
import { CopytradedetailsComponent } from './copytradedetails/copytradedetails.component';
import { OpenpositionComponent } from './openposition/openposition.component';
import { ClosepositionComponent } from './closeposition/closeposition.component';
import { OrderbookComponent } from './orderbook/orderbook.component';
import { AdminopenpositionComponent } from './adminopenposition/adminopenposition.component';
import { AdmintradelogsComponent } from './admintradelogs/admintradelogs.component';
import { AdminmarketwatchComponent } from './adminmarketwatch/adminmarketwatch.component';
import { LandingnavComponent } from './landingnav/landingnav.component';
import { TokenInterceptorService } from './token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutusComponent,
    PricingComponent,
    BrokerComponent,
    SidebarComponent,
    SliderComponent,
    DashboardComponent,
    PortfolioComponent,
    ProfitComponent,
    DematComponent,
    SigninComponent,
    LoginComponent,
    AdminComponent,
    DashboardviewComponent,
    UserviewComponent,
    CopytradedetailsComponent,
    OpenpositionComponent,
    ClosepositionComponent,
    OrderbookComponent,
    AdminopenpositionComponent,
    AdmintradelogsComponent,
    AdminmarketwatchComponent,
    LandingnavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true},
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
