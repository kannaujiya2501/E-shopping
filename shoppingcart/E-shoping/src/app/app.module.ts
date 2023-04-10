import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AbctestingComponent } from './abctesting/abctesting.component';
<<<<<<< HEAD
import { CartComponent } from './cart/cart.component';
=======
import { Abc2testingComponent } from './abc2testing/abc2testing.component';
>>>>>>> 279b34e (testing2 added)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    AbctestingComponent,
<<<<<<< HEAD
    CartComponent
=======
    Abc2testingComponent
>>>>>>> 279b34e (testing2 added)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
