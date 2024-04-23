import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent {
  constructor(private router: Router, private userService: UserService, private route: ActivatedRoute){}

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

  updateUser(): void {
    this.userService.updateUser(this.user).subscribe((res) => {
      alert(res.msg)
      this.router.navigate(['/user'])
    })

  }

  cancel(): void {
    this.router.navigateByUrl('/user')
  }
}
