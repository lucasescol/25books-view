import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Borrow } from '../models/borrow.model';
import { EMPTY, Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BorrowService {
  baseUrl = "http://localhost:5000/api/book/borrow"

  constructor(private http: HttpClient) { }

  newBorrow(borrow: Borrow): Observable<any> {
    let req = { "borrow": borrow }
    return this.http.post<Borrow>(this.baseUrl, req).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  getBorrow(): Observable<Borrow[]> {
    return this.http.get<Borrow[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  getBorrowById(id: string): Observable<Borrow> {
    let url = `${this.baseUrl}/${id}`
    return this.http.get<Borrow[]>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  deleteBorrow(id: string): Observable<any> {
    let url = `${this.baseUrl}/${id}`
    return this.http.delete<Borrow>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    alert(e.msg)
    return EMPTY
  }
}
