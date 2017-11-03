import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ApplicationComponent } from './application/application.component';
import { PetSearchService } from './service/pet-search.service';
import { BsDropdownModule } from 'ngx-bootstrap';

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
    BsDropdownModule.forRoot()
  ],
  providers: [PetSearchService],
  bootstrap: [AppComponent]
  })
export class AppModule { }
