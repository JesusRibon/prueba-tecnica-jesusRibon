import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'SERVICIOS QUIPUX';
  subtitle = 'Trámites en tu mano';
  description =
    'Ahora podrás hacer todos tus trámites desde la comodidad de tu casa, desde cualquier dispositivo computadora, tablet o móvil.';
  progress = 25; // Representa el porcentaje de progreso
  page = '1/4'; // Indicador de página
  cards = [
    {
      title: 'Certificado',
      description: 'Conoce los beneficios que tenemos para ti al registrarte',
      buttonText: '+ beneficios'
    },
    {
      title: 'Crear cuenta',
      description: 'Conoce los beneficios que tenemos para ti al registrarte',
      buttonText: 'Ver todo'
    },
    {
      title: 'Top trámites',
      description: 'Conoce los trámites más solicitados.',
      buttonText: 'Ver todo'
    }
  ];
}
