import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gerente',
  standalone: true,
  imports: [FormsModule],
  
  templateUrl: './gerente.component.html',
  styleUrls: ['./gerente.component.css']
})
export class GerenteComponent {
  id: string = '0001'; // ID fijo para el gerente
  contrasena: string = '';

  constructor(private router: Router) {} // Inyecta el router

  iniciarSesion() {
    if (this.id === '0001' && this.contrasena === '1234') {
      console.log('Inicio de sesión exitoso');
      this.router.navigate(['/gerente-dashboard']); // Redirige a la vista del gerente
    } else {
      console.error('ID o contraseña incorrectos');
    }
  }
}
