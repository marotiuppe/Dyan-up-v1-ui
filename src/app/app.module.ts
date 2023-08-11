import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutNavbarComponent } from './layout/default-layout-navbar/default-layout-navbar.component';
import { SidebarOffcanvasNavbarComponent } from './layout/sidebar-offcanvas-navbar/sidebar-offcanvas-navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { CourseComponent } from './modules/course/course.component';
import { UserComponent } from './modules/user/user.component';
import { LoginComponent } from './modules/login/login.component';
import { SignUpComponent } from './modules/sign-up/sign-up.component';
import { ContentComponent } from './modules/content/content.component';
import { PaymentComponent } from './modules/payment/payment.component';
import { AnalyticsComponent } from './modules/analytics/analytics.component';
import { NotificationComponent } from './modules/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutNavbarComponent,
    SidebarOffcanvasNavbarComponent,
    FooterComponent,
    DashboardComponent,
    CourseComponent,
    UserComponent,
    NotificationComponent,
    LoginComponent,
    SignUpComponent,
    ContentComponent,
    PaymentComponent,
    AnalyticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
