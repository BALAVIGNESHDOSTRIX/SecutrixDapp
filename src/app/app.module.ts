import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogincompComponent } from './logincomp/logincomp.component';
import { UserpageComponent } from './userpage/userpage.component';
import {SecutrixService} from '../app/secutrix.service';
import { HttpClientModule } from '@angular/common/http';
import { logging } from 'protractor';

const Routes = [{path:'user', component:UserpageComponent},
 {path:'login',component:LogincompComponent},
 {
  path: '',
  redirectTo: 'login',
  pathMatch: 'full',
}];
@NgModule({
  declarations: [
    AppComponent,
    LogincompComponent,
    UserpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [SecutrixService],
  bootstrap: [AppComponent]
})
export class AppModule { }
