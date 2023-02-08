import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MyPostComponent } from './components/my-post/my-post.component';
import { PostComponent } from './components/post/post.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './services/auth.guard';
import { LoginGaurdGuard } from './services/login-gaurd.guard';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent,canActivate: [LoginGaurdGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [LoginGaurdGuard]},
  {path: 'post/:id', component: PostComponent, canActivate: [AuthGuard]},
  {path: 'create-post', component: CreatePostComponent},
  {path: 'mypost', component: MyPostComponent},
  // {path: 'logout', component: PostComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
