import { Component } from '@angular/core';
import { User } from '../../../models/user.model';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
  constructor(private router: Router, private userService: UserService){}

  user: User = {
    id: null,
    name: "",
    email: "",
    telephone: "",
    cpf: ""
  }

  newUser(): void {
    this.userService.saveUser(this.user).subscribe((res) => {
      alert(res.msg)
      this.router.navigate(['/user'])
    })

  }

  cancel(): void {
    this.router.navigateByUrl('/user')
  }
}
