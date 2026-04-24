import { Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
  {
    path: 'projects',
    component: ProjectComponent
  },
  {
    path: 'project',
    redirectTo: 'projects',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomePageComponent
  }
];
