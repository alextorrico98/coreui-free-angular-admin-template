import { Routes } from '@angular/router';
export const routes: Routes = [
    {
        path: '',
        data: {
          title: 'Base'
        },
        children: [
          {
            path: '',
            redirectTo: 'cards',
            pathMatch: 'full'
          },
          {
            path: 'productos',
            loadComponent: () => import('./productos/productos.component').then(m => m.ProductosComponent),
            data: {
              title: 'Producto'
            }
          },
       {
           path: 'reportes',
             loadComponent: () => import('./reportes/reportes.component').then(m => m.ReportesComponent),
             data: {
              title: 'Reportes'
            }
        }
        ]  
    }
]
    