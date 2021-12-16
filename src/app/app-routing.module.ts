import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ClientLayoutComponent
} from './components';
import {
  HomepageComponent, P1Component, P2Component, P3Component
} from './pages';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      {
        path: '',
        component: HomepageComponent,
        data: { title: 'hugo boss' }
      },
      {
        path: 'p1',
        component: P1Component,
        data: { title: 'hugo boss' }
      },
      {
        path: 'p2',
        component: P2Component,
        data: { title: 'hugo boss' }
      },
      {
        path: 'p3',
        component: P3Component,
        data: { title: 'hugo boss' }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
export const routingComponents = [ClientLayoutComponent];
