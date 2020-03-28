import { WomenComponent } from './fashion/women/women.component';
import { MenComponent } from './fashion/men/men.component';
import { FashionComponent } from './fashion/fashion.component';
import { LightingComponent } from './appliances/lighting/lighting.component';
import { FurnitureComponent } from './appliances/furniture/furniture.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { MobilesComponent } from './electronics/mobiles/mobiles.component';
import { LaptopsComponent } from './electronics/laptops/laptops.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlineshopingComponent } from './onlineshoping/onlineshoping.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { LoginAuthService } from './login-auth.service';


const routes: Routes = [
  {path:"" , component:OnlineshopingComponent },
  {path:"electronics" , component:ElectronicsComponent , canActivate:[LoginAuthService] ,
    children:[
      {path:"laptops" , component:LaptopsComponent },
      {path:"mobiles" , component:MobilesComponent},
      {path:"mobiles" , component:MobilesComponent}
    ]
  },

  {path:"appliances" , component:AppliancesComponent , 
    children:[
      {path:"furniture" , component:FurnitureComponent},
      {path:"lighting" , component:LightingComponent}
    ]

},
{path:"fashion" , component:FashionComponent ,
  children:[
    {path:"men" ,component:MenComponent},
    {path:"women" , component:WomenComponent}
  ]

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
