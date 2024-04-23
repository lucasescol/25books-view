import { UserService } from 'src/app/services/user.service';
import { User } from '../../../models/user.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent {
  users!: User[]

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users
    })

  }

}
