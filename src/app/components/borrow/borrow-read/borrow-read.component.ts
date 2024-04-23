import { Component, OnInit } from '@angular/core';
import { Borrow } from 'src/app/models/borrow.model';
import { BorrowService } from 'src/app/services/borrow.service';

@Component({
  selector: 'app-borrow-read',
  templateUrl: './borrow-read.component.html',
  styleUrls: ['./borrow-read.component.css']
})
export class BorrowReadComponent implements OnInit {
  borrows!: Borrow[]

  constructor(private borrowService: BorrowService) { }

  ngOnInit(): void {
    this.borrowService.getBorrow().subscribe(borrows => {
      this.borrows = borrows
    })
  }
}
