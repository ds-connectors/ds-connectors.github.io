import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarComponent } from './calendar/calendar.component';
import { PythonReferenceComponent } from './python-reference/python-reference.component';
import { PoliciesComponent } from './policies/policies.component';

const routes: Routes = [
  {
    path: 'python-reference',
    component: PythonReferenceComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'policies',
    component: PoliciesComponent
  },
  {
    path: '',
    redirectTo: 'calendar',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
