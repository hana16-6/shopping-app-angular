import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterComponent } from './sign-in-up/register/register.component';
import { LoginComponent } from './sign-in-up/login/login.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { DetailsComponent } from './details/details.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GuardComComponent } from './guard-com/guard-com.component';
import { AuthGuard } from './auth.guard';
import { SignInUpModule } from './sign-in-up/sign-in-up.module';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'product-list',
    pathMatch: 'full',
  },
  {
    path: 'product-list',
    component: ProductListComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
  },
  {
    path: 'cart-list',
    component: CartListComponent,
  },
  {
    path: 'guardCom',
    component: GuardComComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'wishList',
    component: FavoritesComponent,
  },
  {
    path: '**',
    component: ProductListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SignInUpModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
