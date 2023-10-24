import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { TheatreWorkComponent } from './theatre-work/theatre-work.component';
import { ResumeComponent } from './resume/resume.component';
import { EventsComponent } from './events/events.component';
import { ArtistBioComponent } from './artist-bio/artist-bio.component';
import { PublicationsComponent } from './publications/publications.component';

const routes: Routes = [
  {path: '', redirectTo: '/resume', pathMatch: 'full'},
  {path: 'home', component: ResumeComponent},
  {path: 'theatre', component: TheatreWorkComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'events', component: EventsComponent},
  {path: 'artist-bio', component: ArtistBioComponent},
  {path: 'publications', component: PublicationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
