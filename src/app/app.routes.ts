import { Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
  {
    path: 'project',
    component: ProjectComponent
  },
  {
    path: '',
    component: HomePageComponent
  }
];
