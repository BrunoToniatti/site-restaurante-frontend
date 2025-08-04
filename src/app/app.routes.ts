import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Menu } from './pages/menu/menu';
import { Contact } from './pages/contact/contact';
import { About } from './pages/about/about';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'menu',
    component: Menu
  },
  {
    path: 'contato',
    component: Contact
  },
  {
    path: 'sobre',
    component: About
  }
];
