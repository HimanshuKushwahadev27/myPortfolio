import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'skills',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'project',
    renderMode: RenderMode.Prerender
  }
];
