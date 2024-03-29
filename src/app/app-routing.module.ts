import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    children:[{
      path: 'demo',
      loadChildren: () => import('./pages/demo/demo.module').then( m => m.DemoModule)
    },
    {
      path: 'auth',
      loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthModule)
    },
    {
      path: 'static',
      loadChildren: () => import('./pages/static/static.module').then( m => m.StaticModule)
    },
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'static/welcome'
    },

     ]
  },

  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'static/404'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
