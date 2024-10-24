import { Component } from '@angular/core';
import { Plato } from './platoInterface'; // Asegúrate de tener esta interfaz
import { NgFor, NgIf } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-platos',
  standalone: true,
  imports: [NgFor, NgIf,FormsModule],
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent {
  platos: Plato[] = [];
  nuevoPlato: Plato = { id: 0, nombre: '', descripcion: '', precio: 0, disponible: true, imagen: '' };

  constructor(private router: Router) { // Inyecta Router en el constructor
    this.cargarPlatos();
  }

  cargarPlatos() {
    const platosEnStorage = localStorage.getItem('platos');
    
    if (platosEnStorage) {
      try {
        this.platos = JSON.parse(platosEnStorage);
        
      } catch (error) {
        console.error('Error al parsear platos desde localStorage:', error);
        this.platos = []; // Limpia la lista si hay un error en el parseo
      }
    } else {
      // Si no existen, agregar los platos por defecto
      this.platos = [
        { id: 1, nombre: 'Hamburguesa', descripcion: 'Hamburguesa clásica', precio: 50, disponible: true, imagen: 'https://www.imagella.com/cdn/shop/products/042159190b2eff37fc03d8aacbb25274.jpg?v=1692589279' },
        { id: 2, nombre: 'Pizza', descripcion: 'Pizza de queso', precio: 80, disponible: true, imagen: 'ruta/a/tu/imagen/pizza.jpg' },
        { id: 3, nombre: 'Tacos', descripcion: 'Tacos al pastor', precio: 30, disponible: true, imagen: 'https://www.imagella.com/cdn/shop/products/042159190b2eff37fc03d8aacbb25274.jpg?v=1692589279' },
        { id: 4, nombre: 'Ensalada', descripcion: 'Ensalada César', precio: 45, disponible: true, imagen: 'ruta/a/tu/imagen/ensalada.jpg' },
        { id: 5, nombre: 'Sushi', descripcion: 'Sushi variado', precio: 100, disponible: true, imagen: 'ruta/a/tu/imagen/sushi.jpg' },
        { id: 6, nombre: 'Pasta', descripcion: 'Pasta al pesto', precio: 60, disponible: true, imagen: 'ruta/a/tu/imagen/pasta.jpg' }
      ];
      this.actualizarLocalStorage(); // Asegúrate de guardar los platos predeterminados en localStorage
    }
    
    
  }
  
  regresarDashboard() {
    this.router.navigate(['/gerente-dashboard']); // Cambia la ruta según tu configuración
  }

  private actualizarLocalStorage() {
    localStorage.setItem('platos', JSON.stringify(this.platos));
  }

  deshabilitarPlato(id: number) {
    const plato = this.platos.find(p => p.id === id);
    if (plato) {
      plato.disponible = false;
      this.actualizarLocalStorage();
      alert(`Plato ${plato.nombre} deshabilitado`);
    }
  }

  habilitarPlato(id: number) {
    const plato = this.platos.find(p => p.id === id);
    if (plato) {
      plato.disponible = true;
      this.actualizarLocalStorage();
      alert(`Plato ${plato.nombre} habilitado`);
    }
    console.log(this.platos); // En PlatosComponent

  }

  agregarPlato(form: NgForm) {
    if (form.valid) {
      this.nuevoPlato.id = this.platos.length ? Math.max(...this.platos.map(p => p.id)) + 1 : 1; // Asignar un nuevo ID
      this.platos.push({ ...this.nuevoPlato }); // Agregar el nuevo plato
      this.actualizarLocalStorage(); // Actualizar el localStorage
      form.reset(); // Reiniciar el formulario
    }
    console.log(this.platos); // En PlatosComponent

  }
}
