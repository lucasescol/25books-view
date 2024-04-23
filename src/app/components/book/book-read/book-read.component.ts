import { Component, OnInit } from '@angular/core';
import { Book } from '../../../models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-read',
  templateUrl: './book-read.component.html',
  styleUrls: ['./book-read.component.css']
})
export class BookReadComponent implements OnInit {
  books!: Book[]
  query: string = ""

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(books => {
      this.books = books
    })

  }

  searchBooks(): void {
    try {
      let radioElem = document.querySelector('input[name="searchType"]:checked') as HTMLInputElement
      var type = radioElem.value
    } catch (error) {
      var type = ""
    }

    if (type == "title" || type == "") {
      this.bookService.searchBookByTitle(this.query).subscribe(books => {
        this.books = books.search
      })

    } else {
      this.bookService.searchBookByAuthor(this.query).subscribe(books => {
        this.books = books.search
      })
    }
  }

  onSearchChange(searchValue: any): void {
    this.query = searchValue
  }
}
