import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Book } from '../../../models/book.model';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent {
  constructor(private router: Router, private userService: UserService, private route: ActivatedRoute) { }

  user: User = {
    id: null,
    name: "",
    email: "",
    telephone: "",
    cpf: ""
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id') + ""
    this.userService.getUserById(id).subscribe(user => {
      this.user = user
    })
  }

  deleteUser(): void {
    let id = this.user.id + ""
    this.userService.deleteUser(id).subscribe((res) => {
      alert(res.msg)
      this.router.navigate(['/user'])
    })

  }

  cancel(): void {
    this.router.navigateByUrl('/user')
  }
}
