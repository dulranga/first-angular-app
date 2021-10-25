import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './pages/all-users/all-users.component';
import { FullUserComponent } from './pages/full-user/full-user.component';
import { SearchReposComponent } from './pages/search-repos/search-repos.component';

const routes: Routes = [
  { path: 'users', component: AllUsersComponent },
  { path: 'users/:username', component: FullUserComponent },
  {
    path: 'search',
    children: [
      {
        path: 'repos/:query',
        component: SearchReposComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routerComponents = [
  AllUsersComponent,
  FullUserComponent,
  SearchReposComponent,
];
