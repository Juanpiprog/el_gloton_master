import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para el uso de [(ngModel)]

@Component({
  selector: 'app-registrar-empleado',
  standalone: true,
  imports: [FormsModule], // Asegúrate de importar FormsModule
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent {
  codigo: string = '';
  contrasena: string = '';
  direccion: string = '';
  telefono: string = '';

  empleados: any[] = []; // Lista temporal de empleados

  registrarEmpleado() {
    const nuevoEmpleado = {
      codigo: this.codigo,
      contrasena: this.contrasena,
      direccion: this.direccion,
      telefono: this.telefono
    };
    this.empleados.push(nuevoEmpleado);
    alert('Empleado registrado con éxito');
    // Resetear campos
    this.codigo = '';
    this.contrasena = '';
    this.direccion = '';
    this.telefono = '';
  }
}
