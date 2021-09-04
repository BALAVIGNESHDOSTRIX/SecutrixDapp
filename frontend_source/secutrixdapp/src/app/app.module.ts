import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogincompComponent } from './logincomp/logincomp.component';
import { UserpageComponent } from './userpage/userpage.component';
import {SecutrixService} from '../app/secutrix.service';
import { HttpClientModule } from '@angular/common/http';
import {SecutrixGaurdGuard} from './secutrix-gaurd.guard';
import {LogincheckGuard} from './logincheck.guard';


const Routes = [
 {path:'login',component:LogincompComponent,canActivate: [LogincheckGuard]},
 {
  path: '',component:UserpageComponent,canActivate: [SecutrixGaurdGuard]
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
