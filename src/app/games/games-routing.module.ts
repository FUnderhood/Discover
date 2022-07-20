import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesPage } from './games.page';

const routes: Routes = [
  {
    path: 'pages',
    component: GamesPage,
    children: [
      {
        path: 'discover',
        children: [
         {
            path: '',
            loadChildren: () => import('./discover/discover.module').then( m => m.DiscoverPageModule)
         },
         {
          path: ':gameId',
          loadChildren: () => import('./discover/game-detail/game-detail.module').then( m => m.GameDetailPageModule)
         }
        ]
      },
      {
        path: 'create',
        children: [
          {
             path: '',
             loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
          }
         ]
      },
      {
        path: '',
        redirectTo: '/games/pages/discover',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/games/pages/discover',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesPageRoutingModule {}
