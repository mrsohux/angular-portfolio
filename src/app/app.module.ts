import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationsComponent } from './components/educations/educations.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ProjectCardComponent } from './generic/project-card/project-card.component';
import { HeroCardComponent } from './generic/hero-card/hero-card.component';
import { HttpClientModule } from '@angular/common/http';
import { CertificatesComponent } from './components/certificates/certificates.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ExperiencesComponent,
    SkillsComponent,
    EducationsComponent,
    ContactusComponent,
    ProjectsComponent,
    ProjectCardComponent,
    HeroCardComponent,
    CertificatesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    BrowserAnimationsModule, 
    ToastrModule.forRoot(), 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
