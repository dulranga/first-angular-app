import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routerComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MiniRepoComponent } from './components/repository/mini/mini.component';
import { MiniUserComponent } from './components/users/mini-user/mini-user.component';
import { RepositoriesService } from './services/repositories/repositories.service';
import { UsersService } from './services/users/users.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    MiniUserComponent,
    LoadingComponent,
    MiniRepoComponent,
    routerComponents,
    NavBarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [UsersService, RepositoriesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
