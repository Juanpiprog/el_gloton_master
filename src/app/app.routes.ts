import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ClienteComponent } from './cliente/cliente.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { GerenteComponent } from './gerente/gerente.component';
import { GerenteDashboardComponent } from './gerente-dashboard/gerente-dashboard.component';
import { MenuClienteComponent } from './menu-cliente/menu-cliente.component'; // Importa el nuevo componente
import { PlatosComponent } from './platos/platos.component';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { GestionarPedidosComponent } from './gestionar-pedidos/gestionar-pedidos.component'; // Asegúrate de que la ruta sea correcta

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'empleado', component: EmpleadoComponent },
  { path: 'gerente', component: GerenteComponent },
  { path: 'gerente-dashboard', component: GerenteDashboardComponent },
  { path: 'menu-cliente', component: MenuClienteComponent }, // Nueva ruta para el menú del cliente
  { path: 'platos', component: PlatosComponent }, 
  { path: 'registrar-empleado', component: RegistrarEmpleadoComponent },
  { path: 'gestionar-pedidos', component: GestionarPedidosComponent },

];
//app-platos