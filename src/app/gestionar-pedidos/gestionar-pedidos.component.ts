import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestionar-pedidos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gestionar-pedidos.component.html',
  styleUrls: ['./gestionar-pedidos.component.css']
})
export class GestionarPedidosComponent {
  pedidos: any[] = []; // Aquí almacenaremos los pedidos cargados desde localStorage

  constructor() {
    this.cargarPedidos();
  }

  cargarPedidos() {
    const pedidosEnStorage = localStorage.getItem('pedidos');
    if (pedidosEnStorage) {
      this.pedidos = JSON.parse(pedidosEnStorage);
    } else {
      this.pedidos = []; // Si no hay pedidos, inicializamos un array vacío
    }
    console.log('Pedidos cargados para el empleado:', this.pedidos);
  }

  cambiarEstado(pedido: any, nuevoEstado: string) {
    // Cambiar el estado del pedido a 'Preparando' o 'Entregado'
    pedido.estado = nuevoEstado;

    // Guardar los cambios en localStorage
    localStorage.setItem('pedidos', JSON.stringify(this.pedidos));
    console.log(`Estado del pedido ${pedido.id_pedido} cambiado a ${nuevoEstado}`);
  }
}
