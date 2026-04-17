import { Routes } from '@angular/router';
import { SkillSectionComponent } from './skill-section/skill-section.component';
import { ProjectComponent } from './project/project.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
  {
    path: 'skills',
    component: SkillSectionComponent
  },
  {
    path: 'project',
    component: ProjectComponent
  },
  {
    path: '',
    component: HomePageComponent
  }
];
