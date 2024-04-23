import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { Book } from '../../../models/book.model';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent {
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

  deleteBook(): void {
    let id = this.book.id + ""
    this.bookService.deleteBook(id).subscribe((res) => {
      alert(res.msg)
      this.router.navigate(['/book'])
    })

  }

  cancel(): void {
    this.router.navigateByUrl('/book')
  }
}
