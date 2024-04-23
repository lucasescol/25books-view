import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCreateComponent } from './components/book/book-create/book-create.component';
import { BookUpdateComponent } from './components/book/book-update/book-update.component';
import { BookDeleteComponent } from './components/book/book-delete/book-delete.component';
import { BookComponent } from './views/book/book.component';
import { UserComponent } from './views/user/user.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { UserDeleteComponent } from './components/user/user-delete/user-delete.component';
import { BorrowComponent } from './views/borrow/borrow.component';
import { BorrowCreateComponent } from './components/borrow/borrow-create/borrow-create.component';
import { BorrowDeleteComponent } from './components/borrow/borrow-delete/borrow-delete.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'book',
    component: BookComponent
  },
  {
    path: 'book/new',
    component: BookCreateComponent
  },
  {
    path: 'book/edit/:id',
    component: BookUpdateComponent
  },
  {
    path: 'book/delete/:id',
    component: BookDeleteComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'user/new',
    component: UserCreateComponent
  },
  {
    path: 'user/edit/:id',
    component: UserUpdateComponent
  },
  {
    path: 'user/delete/:id',
    component: UserDeleteComponent
  },
  {
    path: 'borrow',
    component: BorrowComponent
  },
  {
    path: 'borrow/new',
    component: BorrowCreateComponent
  },
  {
    path: 'borrow/delete/:id',
    component: BorrowDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
