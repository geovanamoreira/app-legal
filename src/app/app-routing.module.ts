import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'sgk',
    loadChildren: () => import('./animes/sgk/sgk.module').then( m => m.SgkPageModule)
  },
  {
    path: 'sailor',
    loadChildren: () => import('./animes/sailor/sailor.module').then( m => m.SailorPageModule)
  },
  {
    path: 'hnk',
    loadChildren: () => import('./animes/hnk/hnk.module').then( m => m.HnkPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
