import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DocumentationComponent } from './components/documentation/documentation.component';

export const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'documentation', 
   component: DocumentationComponent,
   children: [{
      path: '',
      loadChildren: () => import('./components/documentation/documentation.module').then((m) => m.DocumentationModule)
   }] 
},
];
