import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-menu-cliente',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './menu-cliente.component.html',
  styleUrls: ['./menu-cliente.component.css']
})
export class MenuClienteComponent {
  nombreCliente: string | null = null;
  idCliente: string | null = null;
  platosDisponibles: any[] = [];
  platosSeleccionados: any[] = []; // Array para almacenar platos seleccionados

  constructor(private router: Router) {
    this.cargarClienteLogueado();
    this.cargarPlatosDisponibles();
  }

  // Cargar los datos del cliente logueado desde localStorage
  cargarClienteLogueado() {
    const clienteLogueado = localStorage.getItem('clienteLogueado');
    if (clienteLogueado) {
      const cliente = JSON.parse(clienteLogueado);
      this.nombreCliente = cliente.nombre;
      this.idCliente = cliente.id;
    } else {
      alert('No se encontró ningún cliente logueado');
      this.router.navigate(['/login']);
    }
  }

  // Cargar los platos disponibles desde localStorage
  cargarPlatosDisponibles() {
    const platosEnStorage = localStorage.getItem('platos');
    if (platosEnStorage) {
      this.platosDisponibles = JSON.parse(platosEnStorage);
    } else {
      console.error('No hay platos disponibles');
      this.platosDisponibles = [];
    }
  }

  // Método para cerrar sesión
  cerrarSesion() {
    localStorage.removeItem('clienteLogueado');
    this.router.navigate(['/login']);
  }

  // Método para seleccionar un plato
  hacerPedido(plato: any) {
    // Verifica si el plato ya está en la lista de seleccionados
    const existe = this.platosSeleccionados.find(p => p.id === plato.id);
    if (!existe) {
      this.platosSeleccionados.push(plato); // Agrega el plato a la lista de seleccionados
      alert(`${plato.nombre} añadido al pedido.`);
    } else {
      alert(`${plato.nombre} ya está en el pedido.`);
    }
  }

  // Método para confirmar el pedido
  confirmarPedido() {
    if (this.platosSeleccionados.length === 0) {
      alert('No hay platos seleccionados para hacer un pedido.');
      return;
    }

    const confirmar = confirm('¿Desea confirmar el pedido?');
    if (confirmar) {
      // Crear un nuevo pedido
      const nuevoPedido = {
        id_pedido: Date.now(), // ID único del pedido basado en la fecha y hora actual
        cliente_id: this.idCliente,
        platos: this.platosSeleccionados,
        estado: 'Pendiente' // Estado inicial del pedido
      };

      // Guardar el pedido en localStorage
      const pedidosEnStorage = localStorage.getItem('pedidos');
      const pedidos = pedidosEnStorage ? JSON.parse(pedidosEnStorage) : [];
      pedidos.push(nuevoPedido); // Agregar el nuevo pedido a la lista
      localStorage.setItem('pedidos', JSON.stringify(pedidos)); // Guardar la lista actualizada

      alert('Pedido confirmado con éxito.');
      console.log('Pedido confirmado:', nuevoPedido);

      // Limpiar la selección
      this.platosSeleccionados = [];
    }
  }
}
