import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavberComponent } from './navber/navber.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FlagAPIComponent } from './flag-api/flag-api.component';
import { FormComponent } from './form/form.component';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    NavberComponent,
    FooterComponent,
    FlagAPIComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
