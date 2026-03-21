    import { Routes } from '@angular/router';

    export const routes: Routes = [

    {path : 'skills', 
    loadComponent: () =>   import('./skill-section/skill-section.component')
        .then(m => m.SkillSectionComponent)
    },
    {path : 'project', 
    loadComponent: () =>   import('./project/project.component')
        .then(m => m.ProjectComponent)
    },
    {path : 'contact', 
    loadComponent: () =>   import('./contacts/contacts.component')
        .then(m => m.ContactsComponent)
    },
    {path : '', 
    loadComponent: () =>   import('./home-page/home-page.component')
        .then(m => m.HomePageComponent)
    }
    ];
