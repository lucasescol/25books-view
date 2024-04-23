import { BookService } from 'src/app/services/book.service';
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  constructor(private router: Router, private bookService: BookService){}

  navigateToBookCreate(): void {
    this.router.navigate(['/book/new'])
  }
  
  navigateToBorrowing(): void {
    this.router.navigate(['/borrow'])
  }
  
  navigateToUserList(): void {
    this.router.navigate(['/user'])

  }

 
}
