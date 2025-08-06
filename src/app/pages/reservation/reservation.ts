import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Navebar } from "../../components/navebar/navebar";

interface TimeSlot {
  time: string;
  available: boolean;
}

interface TableOption {
  id: string;
  name: string;
  capacity: number;
  available: boolean;
}

interface ReservationForm {
  name: string;
  email: string;
  phone: string;
  guests: number;
  date: string;
  time: string;
  table: string;
  specialRequests: string;
}

@Component({
  selector: 'app-reservation',
  imports: [Navebar, CommonModule, FormsModule],
  templateUrl: './reservation.html',
  styleUrl: './reservation.scss'
})
export class Reservation {
  currentDate = new Date();
  selectedDate: Date | null = null;
  selectedMonth = new Date().getMonth();
  selectedYear = new Date().getFullYear();

  months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  timeSlots: TimeSlot[] = [
    { time: '11:00', available: true },
    { time: '11:30', available: true },
    { time: '12:00', available: false },
    { time: '12:30', available: true },
    { time: '13:00', available: true },
    { time: '13:30', available: false },
    { time: '14:00', available: true },
    { time: '18:00', available: true },
    { time: '18:30', available: true },
    { time: '19:00', available: false },
    { time: '19:30', available: true },
    { time: '20:00', available: true },
    { time: '20:30', available: true },
    { time: '21:00', available: true },
    { time: '21:30', available: false },
    { time: '22:00', available: true }
  ];

  tables: TableOption[] = [
    { id: 'mesa-01', name: 'Mesa 01 - Janela', capacity: 2, available: true },
    { id: 'mesa-02', name: 'Mesa 02 - Centro', capacity: 4, available: true },
    { id: 'mesa-03', name: 'Mesa 03 - Varanda', capacity: 6, available: false },
    { id: 'mesa-04', name: 'Mesa 04 - Privativa', capacity: 8, available: true },
    { id: 'mesa-05', name: 'Mesa 05 - Jardim', capacity: 4, available: true },
    { id: 'mesa-06', name: 'Mesa 06 - Terraço', capacity: 10, available: true }
  ];

  reservationForm: ReservationForm = {
    name: '',
    email: '',
    phone: '',
    guests: 2,
    date: '',
    time: '',
    table: '',
    specialRequests: ''
  };

  formStep = 1;
  maxSteps = 4;
  isSubmitting = false;
  showSuccess = false;

  constructor() {
    // Inicializar com o mês atual
    this.selectedDate = new Date();
    this.updateFormDate();
  }

  // Navegação do calendário
  previousMonth(): void {
    if (this.selectedMonth === 0) {
      this.selectedMonth = 11;
      this.selectedYear--;
    } else {
      this.selectedMonth--;
    }
  }

  nextMonth(): void {
    if (this.selectedMonth === 11) {
      this.selectedMonth = 0;
      this.selectedYear++;
    } else {
      this.selectedMonth++;
    }
  }

  // Gerar dias do calendário
  getCalendarDays(): number[] {
    const firstDay = new Date(this.selectedYear, this.selectedMonth, 1);
    const lastDay = new Date(this.selectedYear, this.selectedMonth + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: number[] = [];

    // Adicionar dias vazios no início
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(0);
    }

    // Adicionar todos os dias do mês
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  }

  // Verificar se um dia é hoje
  isToday(day: number): boolean {
    if (day === 0) return false;
    const today = new Date();
    return day === today.getDate() &&
           this.selectedMonth === today.getMonth() &&
           this.selectedYear === today.getFullYear();
  }

  // Verificar se um dia está no passado
  isPastDate(day: number): boolean {
    if (day === 0) return true;
    const today = new Date();
    const checkDate = new Date(this.selectedYear, this.selectedMonth, day);
    return checkDate < today && !this.isToday(day);
  }

  // Verificar se um dia está selecionado
  isSelectedDate(day: number): boolean {
    if (day === 0 || !this.selectedDate) return false;
    return day === this.selectedDate.getDate() &&
           this.selectedMonth === this.selectedDate.getMonth() &&
           this.selectedYear === this.selectedDate.getFullYear();
  }

  // Selecionar data
  selectDate(day: number): void {
    if (day === 0 || this.isPastDate(day)) return;

    this.selectedDate = new Date(this.selectedYear, this.selectedMonth, day);
    this.updateFormDate();
  }

  private updateFormDate(): void {
    if (this.selectedDate) {
      this.reservationForm.date = this.selectedDate.toISOString().split('T')[0];
    }
  }

  // Filtrar mesas por capacidade
  getAvailableTables(): TableOption[] {
    return this.tables.filter(table =>
      table.available && table.capacity >= this.reservationForm.guests
    );
  }

  // Navegação entre etapas
  nextStep(): void {
    if (this.formStep < this.maxSteps) {
      this.formStep++;
    }
  }

  previousStep(): void {
    if (this.formStep > 1) {
      this.formStep--;
    }
  }

  // Validação da etapa atual
  isStepValid(): boolean {
    switch (this.formStep) {
      case 1:
        return this.selectedDate !== null;
      case 2:
        return this.reservationForm.time !== '';
      case 3:
        return this.reservationForm.table !== '';
      case 4:
        return this.reservationForm.name !== '' &&
               this.reservationForm.email !== '' &&
               this.reservationForm.phone !== '';
      default:
        return false;
    }
  }

  // Selecionar horário
  selectTime(time: string): void {
    this.reservationForm.time = time;
  }

  // Selecionar mesa
  selectTable(tableId: string): void {
    this.reservationForm.table = tableId;
  }

  // Submeter formulário
  async submitReservation(): Promise<void> {
    if (!this.isStepValid()) return;

    this.isSubmitting = true;

    try {
      // Simular envio da reserva
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log('Reserva enviada:', this.reservationForm);
      this.showSuccess = true;

      // Reset form after 3 seconds
      setTimeout(() => {
        this.resetForm();
      }, 3000);

    } catch (error) {
      console.error('Erro ao enviar reserva:', error);
    } finally {
      this.isSubmitting = false;
    }
  }

  // Reset do formulário
  resetForm(): void {
    this.reservationForm = {
      name: '',
      email: '',
      phone: '',
      guests: 2,
      date: '',
      time: '',
      table: '',
      specialRequests: ''
    };
    this.formStep = 1;
    this.showSuccess = false;
    this.selectedDate = new Date();
    this.updateFormDate();
  }

  // Formatação de telefone
  formatPhone(event: any): void {
    let value = event.target.value.replace(/\D/g, '');

    if (value.length >= 11) {
      value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (value.length >= 6) {
      value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else if (value.length >= 2) {
      value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
    }

    this.reservationForm.phone = value;
  }

  // Obter progresso da etapa
  getStepProgress(): number {
    return (this.formStep / this.maxSteps) * 100;
  }

  // Obter nome da mesa selecionada
  getSelectedTableName(): string {
    const table = this.tables.find(t => t.id === this.reservationForm.table);
    return table ? table.name : '';
  }
}
