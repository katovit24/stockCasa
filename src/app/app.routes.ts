import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'residencias',
    loadComponent: () => import('./pages/residencias/residencias.page').then( m => m.ResidenciasPage)
  },
  {
    path: 'estancia',
    loadComponent: () => import('./pages/estancia/estancia.page').then( m => m.EstanciaPage)
  },
];
