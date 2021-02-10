import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//HTTP CLIENT MODULE
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonComponent } from './components/common/common.component';
import { ApiImagePipe } from './pipes/api-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    CommonComponent,
    ApiImagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
