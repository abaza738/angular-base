import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './core/guards/auth.guard';
import { NotFoundComponent } from './views/auth/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./views/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: AppComponent,
    children: [
      {
        canActivate: [AuthGuard],
        path: '',
        loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
