import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() isSidebarOpen: boolean = false;
  @Output() toggleSidebar = new EventEmitter<void>();


  submenuOpen: { [key: string]: boolean } = {
    empresas: false,
    articulos: false,
    colaboradores: false
  };


  onToggleSidebar() {
    this.toggleSidebar.emit();
  }


  toggleSubmenu(menu: string) {
    this.submenuOpen[menu] = !this.submenuOpen[menu];
  }
}
