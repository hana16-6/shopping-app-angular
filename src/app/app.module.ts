import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';

import { DetailsComponent } from './details/details.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { FavoritesComponent } from './favorites/favorites.component';
import{AddToFavReducer} from './store/fav/fav.reducer';
import{CounterReducer} from './store/counter/counter.reducer';
import { GuardComComponent } from './guard-com/guard-com.component'
import { LoaderInterceptor } from './loader.interceptor';
import { LoaderComponent } from './loader/loader.component';
import { SignInUpModule } from './sign-in-up/sign-in-up.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductListComponent,
    ProductCardComponent,
    DetailsComponent,
    CartListComponent,
    FavoritesComponent,
    GuardComComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SignInUpModule,
    StoreModule.forRoot({fav:AddToFavReducer,counter:CounterReducer}),
  ],
  providers: [
   {
    provide:HTTP_INTERCEPTORS,
    useClass:LoaderInterceptor,
    multi:true
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
