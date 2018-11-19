
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule, HomeComponent } from './home';
import { AuthGuard } from './auth';
import { ListComponent } from './list/containers';
import { RegisterPageComponent, LoginPageComponent } from './auth/containers';
import { AddTaskComponent, QuestDetailsComponent } from './quest/containers';
import { InfoComponent, BadRequestComponent } from './shared/containers';

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
    path: 'list',
    component: ListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'quest/:id',
    component: QuestDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-task',
    component: AddTaskComponent,
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
