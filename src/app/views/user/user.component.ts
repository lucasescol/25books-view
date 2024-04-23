import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private router: Router, private bookService: BookService){}

  navigateBookComponent(): void {
    this.router.navigate(['/book'])
  }
  
  navigateToNewUser(): void {
    this.router.navigate(['/user/new'])
  }

  navigateBorrowComponent(): void {
    this.router.navigate(['/borrow'])
  }
}
