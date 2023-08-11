import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { SignUpComponent } from './modules/sign-up/sign-up.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { UserComponent } from './modules/user/user.component';
import { CourseComponent } from './modules/course/course.component';
import { ContentComponent } from './modules/content/content.component';
import { PaymentComponent } from './modules/payment/payment.component';
import { AnalyticsComponent } from './modules/analytics/analytics.component';
import { NotificationComponent } from './modules/notification/notification.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'sign-up',
    component: SignUpComponent
  }, {
    path: 'dashboard',
    component: DashboardComponent
  }, {
    path: 'user',
    component: UserComponent
  }, {
    path: 'course',
    component: CourseComponent
  }, {
    path: 'content',
    component: ContentComponent
  }, {
    path: 'payment',
    component: PaymentComponent
  },{
    path:'analytics',
    component:AnalyticsComponent
  }, {
    path: 'notification',
    component: NotificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
