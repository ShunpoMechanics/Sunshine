import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { TheatreWorkComponent } from './theatre-work/theatre-work.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {path: 'home', component: ResumeComponent},
  {path: 'theatre', component: TheatreWorkComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'resume', component: ResumeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
