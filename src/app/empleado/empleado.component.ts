import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrarEmpleadoComponent } from '../registrar-empleado/registrar-empleado.component';
import { NgIf } from '@angular/common';

interface Empleado {
  id: number;
  nombre: string;
  contrasena: string;
  habilitado?: boolean;
}

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [FormsModule,NgIf,RegistrarEmpleadoComponent],
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  empleados: Empleado[] = [];
  codigo: string = '';
  contrasena: string = '';

  constructor(private router: Router) {
    const empleadosGuardados = localStorage.getItem('empleados');
    this.empleados = empleadosGuardados ? JSON.parse(empleadosGuardados) : [];
  }

  iniciarSesion() {
    const id = parseInt(this.codigo, 10);
    const empleado = this.empleados.find(emp => emp.id === id && emp.contrasena === this.contrasena && emp.habilitado);

    if (empleado) {
      alert(`Inicio de sesión exitoso para ${empleado.nombre}`);
      // Redirigir a la vista correspondiente del empleado
      this.router.navigate(['/gestionar-pedidos']); // Cambia la ruta según sea necesario
    } else {
      alert('ID o contraseña incorrectos o empleado deshabilitado');
    }
     // Limpiar el campo de contraseña después de cada intento
     this.contrasena = '';
  }
}
