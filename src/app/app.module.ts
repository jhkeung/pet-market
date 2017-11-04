import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ApplicationComponent } from './application/application.component';
import { PetSearchService } from './service/pet-search.service';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap';

const appRoutes: Routes = [
  {
    path: 'apply',
    component: ApplicationComponent
  },
  {
    path: 'browse',
    component: PetDetailComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: LandingPageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PetDetailComponent,
    HeaderComponent,
    LandingPageComponent,
    ApplicationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [PetSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
