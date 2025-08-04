import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FeaturedDish {
  name: string;
  price: string;
  image: string;
}

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  featuredDishes: FeaturedDish[] = [
    {
      name: 'Picanha Grelhada',
      price: 'R$ 89,90',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop&crop=center'
    },
    {
      name: 'Salmão ao Molho',
      price: 'R$ 75,90',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300&h=200&fit=crop&crop=center'
    },
    {
      name: 'Risotto de Camarão',
      price: 'R$ 68,90',
      image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=300&h=200&fit=crop&crop=center'
    }
  ];

  scrollToMenu(): void {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  makeReservation(): void {
    // Simulação de reserva - pode integrar com WhatsApp ou sistema de reservas
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de fazer uma reserva no J&B Restaurante.', '_blank');
  }
}
