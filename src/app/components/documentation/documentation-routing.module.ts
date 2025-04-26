import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeekComponent } from './components/week/week.component';

const routes: Routes = [
   { path: '', redirectTo: 'week/1', pathMatch: 'full' },
   { path: 'week/:id', component: WeekComponent },
 ];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
 })
 
export class DocumentationRoutingModule { }