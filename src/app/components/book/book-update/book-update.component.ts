import { Component, OnInit } from '@angular/core';
import { Book } from '../../../models/book.model';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit{
  constructor(private router: Router, private bookService: BookService, private route: ActivatedRoute) { }

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

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id') + ""
    this.bookService.getBookById(id).subscribe(book => {
      this.book = book
    })
  }

  updateBook(): void {
    this.bookService.updateBook(this.book).subscribe((res) => {
      alert(res.msg)
      this.router.navigate(['/book'])
    })

  }

  cancel(): void {
    this.router.navigateByUrl('/book')
  }
}
