import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navebar } from '../../components/navebar/navebar';

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
  specialty?: string;
}

export interface Achievement {
  icon: string;
  title: string;
  description: string;
  year?: string;
}

export interface Value {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  imports: [CommonModule, Navebar],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  teamMembers: TeamMember[] = [
    {
      name: 'João Santos',
      role: 'Chef Executivo',
      image: 'https://images.unsplash.com/photo-1583394293214-28a042c24ac9?w=300&h=400&fit=crop&crop=face',
      description: 'Com mais de 15 anos de experiência culinária, João traz a paixão pela gastronomia brasileira contemporânea.',
      specialty: 'Culinária Brasileira Contemporânea'
    },
    {
      name: 'Beatriz Oliveira',
      role: 'Sommelier',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c17c40ec?w=300&h=400&fit=crop&crop=face',
      description: 'Especialista em harmonização, Beatriz seleciona os melhores vinhos para acompanhar nossos pratos.',
      specialty: 'Harmonização de Vinhos'
    },
    {
      name: 'Ricardo Lima',
      role: 'Sous Chef',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face',
      description: 'Especialista em massas artesanais e técnicas italianas, Ricardo complementa perfeitamente nossa equipe.',
      specialty: 'Massas Artesanais'
    }
  ];

  achievements: Achievement[] = [
    {
      icon: '🏆',
      title: 'Melhor Restaurante Brasileiro',
      description: 'Premiado pela Revista Veja como melhor restaurante de culinária brasileira em São Paulo',
      year: '2023'
    },
    {
      icon: '⭐',
      title: '4.9 Estrelas no Google',
      description: 'Mais de 2.000 avaliações positivas de nossos clientes satisfeitos',
      year: '2024'
    },
    {
      icon: '🍷',
      title: 'Carta de Vinhos Premiada',
      description: 'Reconhecimento internacional pela nossa seleção de vinhos brasileiros e importados',
      year: '2023'
    },
    {
      icon: '🌱',
      title: 'Compromisso Sustentável',
      description: 'Certificado por práticas sustentáveis e apoio a produtores locais',
      year: '2022'
    }
  ];

  values: Value[] = [
    {
      icon: '🍽️',
      title: 'Qualidade',
      description: 'Ingredientes frescos e selecionados, preparados com técnicas refinadas e muito cuidado.'
    },
    {
      icon: '❤️',
      title: 'Paixão',
      description: 'Cada prato é preparado com amor e dedicação, transmitindo nossa paixão pela gastronomia.'
    },
    {
      icon: '🤝',
      title: 'Hospitalidade',
      description: 'Atendimento caloroso e personalizado, fazendo cada cliente se sentir em casa.'
    },
    {
      icon: '🌿',
      title: 'Sustentabilidade',
      description: 'Compromisso com práticas sustentáveis e apoio aos produtores locais.'
    }
  ];

  stats = {
    yearsOfExperience: 10,
    happyCustomers: 5000,
    dishesServed: 50000,
    teamMembers: 25
  };
}
