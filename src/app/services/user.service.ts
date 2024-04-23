import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = "http://localhost:5000/api/user"

  constructor(private http: HttpClient) { }

  saveUser(user: User): Observable<any> {
    let req = { "user": user }
    return this.http.post<User>(this.baseUrl, req).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  getUserById(id: string): Observable<User> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<User>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  updateUser(user: User): Observable<any> {
    const url = `${this.baseUrl}`
    let req = { "user": user }
    return this.http.put<User>(url, req).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  deleteUser(id: string): Observable<any> {
    let url = `${this.baseUrl}/${id}`
    return this.http.delete<User>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    alert(e.msg)
    return EMPTY
  }
}
