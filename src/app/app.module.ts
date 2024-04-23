import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
import { BookReadComponent } from './components/book/book-read/book-read.component';
import { BookCreateComponent } from './components/book/book-create/book-create.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { BookComponent } from './views/book/book.component';
import { BookUpdateComponent } from './components/book/book-update/book-update.component';
import { BookDeleteComponent } from './components/book/book-delete/book-delete.component';
import { UserReadComponent } from './components/user/user-read/user-read.component';
import { UserComponent } from './views/user/user.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { UserDeleteComponent } from './components/user/user-delete/user-delete.component';
import { BorrowReadComponent } from './components/borrow/borrow-read/borrow-read.component';
import { BorrowCreateComponent } from './components/borrow/borrow-create/borrow-create.component';
import { BorrowComponent } from './views/borrow/borrow.component';
import { BorrowDeleteComponent } from './components/borrow/borrow-delete/borrow-delete.component';
import { HomeComponent } from './views/home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BookReadComponent,
    BookCreateComponent,
    BookComponent,
    BookUpdateComponent,
    BookDeleteComponent,
    UserReadComponent,
    UserComponent,
    UserCreateComponent,
    UserUpdateComponent,
    UserDeleteComponent,
    BorrowReadComponent,
    BorrowCreateComponent,
    BorrowComponent,
    BorrowDeleteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
