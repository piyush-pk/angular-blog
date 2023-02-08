import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { PostComponent } from './components/post/post.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { ProfileComponent } from './components/profile/profile.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { MyPostComponent } from './components/my-post/my-post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    BlogCardComponent,
    PostComponent,
    HomeComponent,
    ProfileComponent,
    CreatePostComponent,
    MyPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RichTextEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
