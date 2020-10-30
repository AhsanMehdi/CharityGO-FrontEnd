import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {SignuppageComponent} from './components/signuppage/signuppage.component';
import {DonorhomeComponent} from './components/donorhome/donorhome.component';
import {ProjectComponent} from './components/project/project.component';
import {ProjecteditComponent} from './components/projectedit/projectedit.component';
import {NgosignupComponent} from './components/ngosignup/ngosignup.component';
import {NgohomeComponent} from './components/ngohome/ngohome.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'signuppage', component: SignuppageComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'donorhome', component: DonorhomeComponent
  },
  {
    path: 'ngohome', component: NgohomeComponent
  },
  {
    path: 'ngosignup', component: NgosignupComponent
  },
  {
    path: 'projectedit', component: ProjecteditComponent
  },
  {
    path: 'project', component: ProjectComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
