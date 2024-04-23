import { Book } from '../../../models/book.model';
import { Component } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent {

  constructor(private router: Router, private bookService: BookService){}

  book: Book = {
    id: null,
    title: "",
    author: "",
    company: "",
    release: "",
    isEbook: null,
    location: "",
    borrowed: 0
  }

  newBook(): void {
    this.bookService.saveBook(this.book).subscribe((res) => {
      alert(res.msg)
      this.router.navigate(['/book'])
    })

  }

  cancel(): void {
    this.router.navigateByUrl('/book')
  }
}