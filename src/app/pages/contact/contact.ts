import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Navebar } from '../../components/navebar/navebar';

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ContactInfo {
  icon: string;
  title: string;
  info: string;
  link?: string;
}

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, Navebar],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  contactForm: ContactForm = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  showSuccessMessage = false;

  contactInfo: ContactInfo[] = [
    {
      icon: '📍',
      title: 'Endereço',
      info: 'Rua das Flores, 123 - Centro, São Paulo - SP',
      link: 'https://maps.google.com/?q=Rua+das+Flores+123+Centro+São+Paulo'
    },
    {
      icon: '📞',
      title: 'Telefone',
      info: '(11) 3456-7890',
      link: 'tel:+551134567890'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      info: '(11) 99999-8888',
      link: 'https://wa.me/5511999998888?text=Olá! Gostaria de fazer uma reserva.'
    },
    {
      icon: '📧',
      title: 'E-mail',
      info: 'contato@jbrestaurante.com.br',
      link: 'mailto:contato@jbrestaurante.com.br'
    },
    {
      icon: '🕐',
      title: 'Horário de Funcionamento',
      info: 'Seg-Dom: 11:00 às 23:00'
    }
  ];

  reservationWhatsApp = 'https://wa.me/5511999998888?text=Olá! Gostaria de fazer uma reserva no J&B Restaurante.';
  menuWhatsApp = 'https://wa.me/5511999998888?text=Olá! Gostaria de ver o cardápio do J&B Restaurante.';

  onSubmit(): void {
    if (this.isFormValid()) {
      this.isSubmitting = true;

      // Simular envio do formulário
      setTimeout(() => {
        this.isSubmitting = false;
        this.showSuccessMessage = true;
        this.resetForm();

        // Esconder mensagem de sucesso após 5 segundos
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 5000);
      }, 2000);
    }
  }

  isFormValid(): boolean {
    return !!(
      this.contactForm.name.trim() &&
      this.contactForm.email.trim() &&
      this.contactForm.subject.trim() &&
      this.contactForm.message.trim()
    );
  }

  resetForm(): void {
    this.contactForm = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
  }

  openWhatsApp(link: string): void {
    window.open(link, '_blank');
  }

  openLink(link: string): void {
    window.open(link, '_blank');
  }
}
