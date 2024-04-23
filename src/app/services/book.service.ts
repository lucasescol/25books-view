import { Book } from '../models/book.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  baseUrl = "http://localhost:5000/api/book"

  constructor(private http: HttpClient) { }

  searchBookByTitle(str: string): Observable<any>{
    let req = {"title": str}
    let url = `${this.baseUrl}/search`
    return this.http.post<Book>(url, req).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  searchBookByAuthor(str: string): Observable<any>{
    let req = {"author": str}
    let url = `${this.baseUrl}/search`
    return this.http.put<Book>(url, req).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  saveBook(book: Book): Observable<any> {
    let req = { "book": book }
    return this.http.post<Book>(this.baseUrl, req).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  getBookById(id: string): Observable<Book> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Book>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  updateBook(book: Book): Observable<any> {
    const url = `${this.baseUrl}`
    let req = { "book": book }
    return this.http.put<Book>(url, req).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  deleteBook(id: string): Observable<any> {
    let url = `${this.baseUrl}/${id}`
    return this.http.delete<Book>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    alert(e.msg)
    return EMPTY
  }
}
