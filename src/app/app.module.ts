import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { FormsModule } from '@angular/forms';
// base
import { AppComponent } from './app.component';
// login
import { LoginComponent } from './login/login.component';

import { AppRoutes } from './app.routing';
import { ApiService } from './SERVICE/api.service';
import { UploadService } from './SERVICE/upload.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [UploadService,
    ApiService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
