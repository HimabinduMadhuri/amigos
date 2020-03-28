import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { MobilesComponent } from './electronics/mobiles/mobiles.component';
import { LaptopsComponent } from './electronics/laptops/laptops.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { LightingComponent } from './appliances/lighting/lighting.component';
import { FurnitureComponent } from './appliances/furniture/furniture.component';
import { FashionComponent } from './fashion/fashion.component';
import { MenComponent } from './fashion/men/men.component';
import { WomenComponent } from './fashion/women/women.component';
import { LoginComponent } from './login/login.component';
import { OnlineshopingComponent } from './onlineshoping/onlineshoping.component';
import { LoginAuthService } from './login-auth.service';
import { LoginStatusService } from './login-status.service';

@NgModule({
  declarations: [
    AppComponent,
    ElectronicsComponent,
    MobilesComponent,
    LaptopsComponent,
    AppliancesComponent,
    LightingComponent,
    FurnitureComponent,
    FashionComponent,
    MenComponent,
    WomenComponent,
    LoginComponent,
    OnlineshopingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [LoginAuthService , LoginStatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
