import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { FilterCityPipe } from "./filter-city.pipe";
import { HomeComponent } from "./home/home.component";

import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { OwnerComponent } from "./owner/owner.component";

import { FormsModule } from "@angular/forms";

import { BookingComponent } from "./booking/booking.component";
import { FiltersComponent } from "./filters/filters.component";
import { PropertiesAddComponent } from "./properties-add/properties-add.component";
import { PropertiesDetailComponent } from "./properties-detail/properties-detail.component";
import { PropertiesEditComponent } from "./properties-edit/properties-edit.component";
import { PropertiesComponent } from "./properties/properties.component";

import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";

import { FilterDatePipe } from "./filter-date.pipe";
import { EachadvertisementComponent } from './eachadvertisement/eachadvertisement.component';
import { authInterceptorProviders } from "./helpers/auth.interceptor";
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContactComponent,
    OwnerComponent,
    HomeComponent,
    HeaderComponent,
    PropertiesComponent,
    BookingComponent,
    FiltersComponent,
    FilterDatePipe,
    FilterCityPipe,
    PropertiesAddComponent,
    PropertiesDetailComponent,
    PropertiesEditComponent,
    EachadvertisementComponent,
    UserRegisterComponent,
    UserLoginComponent,
    UserComponent,
    LogoutComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    /* RouterModule.forRoot([
      { path: "login", component: UserLoginComponent },
      { path: "register", component: UserRegisterComponent },
      { path: "contact", component: ContactComponent },
      { path: "owner", component: OwnerComponent },
      { path: "", component: HomeComponent },
      { path: "properties", component: PropertiesComponent },
      { path: "booking", component: BookingComponent },
      { path: "propertiesAdd", component: PropertiesAddComponent },
      { path: "propertiesDetail", component: PropertiesDetailComponent },
      { path: "propertiesEdit", component: PropertiesEditComponent },
      { path: "rent", component: EachadvertisementComponent },
    ]), */
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
