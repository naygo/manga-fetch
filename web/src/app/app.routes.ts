import { Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  {
    path: '',
    title: 'search',
    component: SearchComponent,
  },
  {
    path: 'about',
    title: 'about',
    component: AboutComponent,
  },
];
