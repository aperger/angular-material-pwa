import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialNavigationComponent } from './layout/material-navigation/material-navigation.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ModuleOneComponent } from './modules/module-one/module-one.component';
import { ModuleTwoComponent } from './modules/module-two/module-two.component';
import { MaterialDashboardComponent } from './layout/material-dashboard/material-dashboard.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'app/dashboard'
  },
  {
    path: 'app',
    component: MaterialNavigationComponent,
    children: [
      {
        path: 'dashboard',
        component: MaterialDashboardComponent
      },
      {
        path: 'one',
        component: ModuleOneComponent
      },
      {
        path: 'two',
        component: ModuleTwoComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  { 
    path: '**', component: PageNotFoundComponent // Wildcard route for a 404 page
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
