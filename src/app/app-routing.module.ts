import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  },
  {
    path: 'events', 
    component: EventsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create', 
    component: CreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit', 
    component: EditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  { path: '**', component: PageNotFoundComponent}, // user is redirected here when he goes to a page that doesnt exist
  // This is applied to any route that wasnt previously defined
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
