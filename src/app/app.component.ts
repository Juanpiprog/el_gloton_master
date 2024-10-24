import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  botonActivo: string = ''; // Variable para almacenar el botón activo

  // Función para navegar y activar el botón seleccionad

  title = 'el_gloton';
  constructor(private router: Router) {} // Inyecta Router en el constructor

  navegar(role: string) {
    this.botonActivo = role; // Actualiza el botón activo con el valor del role
    this.router.navigate([`/${role}`]); // Método para navegar a las rutas de cada rol
  }
}
