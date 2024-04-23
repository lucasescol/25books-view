import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { Borrow } from 'src/app/models/borrow.model';
import { User } from 'src/app/models/user.model';
import { BookService } from 'src/app/services/book.service';
import { BorrowService } from 'src/app/services/borrow.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-borrow-create',
  templateUrl: './borrow-create.component.html',
  styleUrls: ['./borrow-create.component.css']
})
export class BorrowCreateComponent implements OnInit {
  
  constructor(private router: Router, private userService: UserService, private bookService: BookService, private borrowService: BorrowService){ }

  users!: User[]
  books!: Book[]
  borrow: Borrow = {
    bookId: undefined,
    userId: undefined,
    user: "",
    book: ""
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users
    })
    this.bookService.getBooks().subscribe(books => {
      this.books = books
    })
  }

  newBorrow(): void {
    let userSelect = document.querySelector("#user") as HTMLInputElement
    let bookSelect = document.querySelector("#book") as HTMLInputElement
    this.borrow.bookId = parseInt(bookSelect.value)
    this.borrow.userId = parseInt(userSelect.value)
    this.borrowService.newBorrow(this.borrow).subscribe((res) => {
      alert(res.msg)
      this.router.navigate(['/borrow'])
    })

  }

  cancel(): void {
    this.router.navigateByUrl('/borrow')
  }
}
