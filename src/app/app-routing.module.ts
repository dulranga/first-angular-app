import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './pages/all-users/all-users.component';
import { FullUserComponent } from './pages/full-user/full-user.component';

const routes: Routes = [
  { path: 'users', component: AllUsersComponent },
  { path: 'user/:username', component: FullUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routerComponents = [AllUsersComponent, FullUserComponent];
