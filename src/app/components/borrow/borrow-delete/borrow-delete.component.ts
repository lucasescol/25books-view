import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Borrow } from 'src/app/models/borrow.model';
import { BorrowService } from 'src/app/services/borrow.service';

@Component({
  selector: 'app-borrow-delete',
  templateUrl: './borrow-delete.component.html',
  styleUrls: ['./borrow-delete.component.css']
})
export class BorrowDeleteComponent {
  constructor(private router: Router, private borrowService: BorrowService, private route: ActivatedRoute) { }

  borrow: Borrow = {
    bookId: undefined,
    userId: undefined,
    user: "",
    book: ""
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id') + ""
    this.borrowService.getBorrowById(id).subscribe(borrow => {
      this.borrow = borrow
    })
  }

  deleteBorrow(): void {
    let id = this.borrow.bookId + ""
    this.borrowService.deleteBorrow(id).subscribe((res) => {
      alert(res.msg)
      this.router.navigate(['/borrow'])
    })

  }

  cancel(): void {
    this.router.navigateByUrl('/borrow')
  }
}
