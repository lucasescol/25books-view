import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BorrowService } from 'src/app/services/borrow.service';

@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.css']
})
export class BorrowComponent {
  constructor(private router: Router, private borrowService: BorrowService){}

  navigateBookComponent(): void {
    this.router.navigate(['/book'])
  }

  navigateUserComponent(): void {
    this.router.navigate(['/user'])
  }
  
  navigateToNewBorrow(): void {
    this.router.navigate(['/borrow/new'])
  }
}
