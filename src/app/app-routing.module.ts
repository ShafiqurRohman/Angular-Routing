import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FlagAPIComponent } from './flag-api/flag-api.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CountryAPIServiceService } from 'src/services/country-apiservice.service';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'home', 
    loadComponent: ()=> import('./home/home.component').then(x => x.HomeComponent) // Standalone Components
  },
  {
    path:'products', 
    loadChildren: ()=> import('./products/product.module').then(x => x.ProductModule)
  },
  {
    path:'all-countries', 
    resolve:{
      countries:CountryAPIServiceService
    },  
    component:FlagAPIComponent
  },
  {
    path:'form',
    component:FormComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
