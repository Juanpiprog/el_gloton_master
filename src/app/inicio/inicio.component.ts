import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router para la navegación

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [], // Aquí puedes agregar imports adicionales si es necesario
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'] // Asegúrate de usar 'styleUrls' en plural
})
export class InicioComponent {
  constructor(private router: Router) {} // Inyecta Router en el constructor

  navegar(role: string) {
    this.router.navigate([`/${role}`]); // Método para navegar a las rutas de cada rol
  }
}

