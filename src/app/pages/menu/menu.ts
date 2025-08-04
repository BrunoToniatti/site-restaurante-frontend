import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navebar } from '../../components/navebar/navebar';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  chef_special?: boolean;
  dietary?: string[];
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-menu',
  imports: [CommonModule, Navebar],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {
  selectedCategory: string = 'all';

  categories: MenuCategory[] = [
    {
      id: 'all',
      name: 'Todos',
      description: 'Todo nosso cardápio',
      icon: '🍽️'
    },
    {
      id: 'entradas',
      name: 'Entradas',
      description: 'Para começar bem',
      icon: '🥗'
    },
    {
      id: 'principais',
      name: 'Pratos Principais',
      description: 'O melhor da nossa cozinha',
      icon: '🥩'
    },
    {
      id: 'massas',
      name: 'Massas',
      description: 'Feitas artesanalmente',
      icon: '🍝'
    },
    {
      id: 'sobremesas',
      name: 'Sobremesas',
      description: 'Finalize com doçura',
      icon: '🍰'
    },
    {
      id: 'bebidas',
      name: 'Bebidas',
      description: 'Para acompanhar',
      icon: '🍷'
    }
  ];

  menuItems: MenuItem[] = [
    // Entradas
    {
      id: 1,
      name: 'Bruschetta Gourmet',
      description: 'Pães artesanais tostados com tomate confit, manjericão fresco, burrata cremosa e azeite extravirgem',
      price: 28.90,
      image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop',
      category: 'entradas',
      dietary: ['vegetariano']
    },
    {
      id: 2,
      name: 'Carpaccio de Salmão',
      description: 'Fatias finas de salmão fresco, alcaparras, rúcula selvagem, parmesão e molho de limão siciliano',
      price: 35.90,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
      category: 'entradas',
      chef_special: true
    },
    {
      id: 3,
      name: 'Polvo Grelhado',
      description: 'Polvo português grelhado com batatas confitadas, pimentão assado e azeite de ervas',
      price: 42.90,
      image: 'https://images.unsplash.com/photo-1559847844-d721426d6edc?w=400&h=300&fit=crop',
      category: 'entradas'
    },

    // Pratos Principais
    {
      id: 4,
      name: 'Bife Ancho Premium',
      description: 'Corte nobre de 400g grelhado no ponto, acompanha batatas rústicas e legumes salteados',
      price: 89.90,
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop',
      category: 'principais',
      chef_special: true
    },
    {
      id: 5,
      name: 'Salmão Wellington',
      description: 'Filé de salmão envolvido em massa folhada com espinafre e ricota, molho hollandaise',
      price: 75.90,
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop',
      category: 'principais'
    },
    {
      id: 6,
      name: 'Cordeiro Mediterrâneo',
      description: 'Pernil de cordeiro com crosta de ervas, ratatouille provençal e redução de vinho tinto',
      price: 92.90,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop',
      category: 'principais'
    },

    // Massas
    {
      id: 7,
      name: 'Risotto de Funghi Porcini',
      description: 'Arroz arbóreo cremoso com mix de cogumelos selvagens, trufas e parmesão reggiano',
      price: 68.90,
      image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop',
      category: 'massas',
      dietary: ['vegetariano']
    },
    {
      id: 8,
      name: 'Linguini alle Vongole',
      description: 'Massa fresca com vongoles frescos, alho, vinho branco, salsinha e azeite extravirgem',
      price: 56.90,
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop',
      category: 'massas'
    },
    {
      id: 9,
      name: 'Nhoque da Casa',
      description: 'Nhoque de batata artesanal com molho pomodoro e manjericão, finalizado com burrata',
      price: 48.90,
      image: 'https://images.unsplash.com/photo-1572441713132-51c75654db73?w=400&h=300&fit=crop',
      category: 'massas',
      dietary: ['vegetariano']
    },

    // Sobremesas
    {
      id: 10,
      name: 'Tiramisù Clássico',
      description: 'Sobremesa italiana tradicional com café expresso, mascarpone e cacau belga',
      price: 24.90,
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop',
      category: 'sobremesas',
      dietary: ['vegetariano']
    },
    {
      id: 11,
      name: 'Petit Gâteau',
      description: 'Bolo de chocolate belga com centro cremoso, sorvete de baunilha e calda quente',
      price: 28.90,
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop',
      category: 'sobremesas',
      chef_special: true
    },

    // Bebidas
    {
      id: 12,
      name: 'Vinho Tinto Reserva',
      description: 'Cabernet Sauvignon argentino, safra 2019, notas de frutas vermelhas e taninos macios',
      price: 89.90,
      image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=400&h=300&fit=crop',
      category: 'bebidas'
    },
    {
      id: 13,
      name: 'Coquetel Signature',
      description: 'Gin premium com frutas vermelhas, manjericão fresco e água tônica artesanal',
      price: 32.90,
      image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=300&fit=crop',
      category: 'bebidas'
    }
  ];

  get filteredItems(): MenuItem[] {
    if (this.selectedCategory === 'all') {
      return this.menuItems;
    }
    return this.menuItems.filter(item => item.category === this.selectedCategory);
  }

  get currentCategoryName(): string {
    if (this.selectedCategory === 'all') {
      return 'Todos os Pratos';
    }
    const category = this.categories.find(c => c.id === this.selectedCategory);
    return category ? category.name : 'Menu';
  }

  selectCategory(categoryId: string): void {
    this.selectedCategory = categoryId;
  }
}
