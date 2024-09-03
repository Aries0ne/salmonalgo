import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PricingComponent } from './pricing/pricing.component';
import { BrokerComponent } from './broker/broker.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProfitComponent } from './profit/profit.component';
import { DematComponent } from './demat/demat.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardviewComponent } from './dashboardview/dashboardview.component';

const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: '', component: HomeComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'pricing', component: PricingComponent},
  { path: 'broker', component: BrokerComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'profit', component: ProfitComponent},
  { path: 'demat', component: DematComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'login', component: LoginComponent},
  { path: 'admin', component: AdminComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
