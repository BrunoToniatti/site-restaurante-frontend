import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Menu } from './pages/menu/menu';
import { Contact } from './pages/contact/contact';
import { About } from './pages/about/about';
import { Reservation } from './pages/reservation/reservation';

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
  },
  {
    path: 'reserva',
    component: Reservation
  }

];
