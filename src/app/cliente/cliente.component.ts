import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importamos el Router
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  nombre = '';
  direccion = '';
  telefono = '';
  contrasena = '';
  confirmarContrasena = '';
  idLogin = '';
  contrasenaLogin = '';
  formActivo: string = 'registro'; // Controla qué formulario se muestra
  private clienteId = 0;

  constructor(private router: Router) {
    // Recuperamos el último clienteId desde localStorage
    const ultimoIdGuardado = localStorage.getItem('ultimoClienteId');
    this.clienteId = ultimoIdGuardado ? +ultimoIdGuardado : 1; // Si no hay id, se comienza desde 1
  }

  mostrarFormulario(tipo: string) {
    this.formActivo = tipo;
  }

  registrar() {
    const cliente = {
      id: this.clienteId++, // Incrementa el clienteId
      nombre: this.nombre,
      direccion: this.direccion,
      telefono: this.telefono,
      contrasena: this.contrasena,
    };

    let clientes = JSON.parse(localStorage.getItem('clientes') || '[]');
    clientes.push(cliente);
    localStorage.setItem('clientes', JSON.stringify(clientes));

    // Guardamos el último clienteId actualizado en localStorage
    localStorage.setItem('ultimoClienteId', this.clienteId.toString());

    this.nombre = '';
    this.direccion = '';
    this.telefono = '';
    this.contrasena = '';
    this.confirmarContrasena = '';

    if (cliente) {
      // Muestra un mensaje de éxito con el ID del cliente
      alert('El cliente con ID: ' + cliente.id + ' se ha registrado exitosamente');

      // Redirige al cliente al menú del cliente después del registro
      this.router.navigate(['/menu-cliente']);
    } else {
      // Si no se completa correctamente el formulario, muestra un mensaje de advertencia
      alert('Falta completar el formulario');
    }
  }

  iniciarSesion() {
    let clientes = JSON.parse(localStorage.getItem('clientes') || '[]');
    const clienteEncontrado = clientes.find(
      (c: any) => c.id == this.idLogin && c.contrasena === this.contrasenaLogin
    );
  
    if (clienteEncontrado) {
      alert('Inicio de sesión exitoso');
  
      // Guardamos el cliente logueado en localStorage
      localStorage.setItem('clienteLogueado', JSON.stringify(clienteEncontrado));
  
      this.router.navigate(['/menu-cliente']);
    } else {
      alert('ID o contraseña incorrectos');
    }
  }
  
}
