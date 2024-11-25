import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSidebarOpen = false;  // El sidebar está cerrado por defecto

  // Alterna el estado del sidebar
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    console.log('Estado del sidebar:', this.isSidebarOpen);  // Verifica el estado
  }
}
