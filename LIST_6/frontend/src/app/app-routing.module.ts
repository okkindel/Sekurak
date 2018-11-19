
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule, HomeComponent } from './home';
import { AuthGuard } from './auth';
import { ListComponent } from './list/containers';
import { RegisterPageComponent, LoginPageComponent } from './auth/containers';
import { AddTaskComponent, QuestDetailsComponent, SummaryComponent } from './quest/containers';
import { InfoComponent, BadRequestComponent, PasswordResetComponent } from './shared/containers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'info',
    component: InfoComponent,
  },
  {
    path: 'reset-pass',
    component: PasswordResetComponent,
  },
  {
    path: 'list',
    component: ListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'summary/:id',
    component: QuestDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-task',
    component: AddTaskComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'summary',
    component: SummaryComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '404',
    component: BadRequestComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes, {
      useHash: true,
      enableTracing: false,
    }),
    HomeModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
