import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SignuppageComponent } from './components/signuppage/signuppage.component';
import { DonorhomeComponent } from './components/donorhome/donorhome.component';
import { NgohomeComponent } from './components/ngohome/ngohome.component';
import { NgosignupComponent } from './components/ngosignup/ngosignup.component';
import { ProjecteditComponent } from './components/projectedit/projectedit.component';
import { ProjectComponent } from './components/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SignuppageComponent,
    DonorhomeComponent,
    NgohomeComponent,
    NgosignupComponent,
    ProjecteditComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
