import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/services/users/user';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'spicy-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss'],
})
export class AllUsersComponent implements OnInit {
  constructor(private usersService: UsersService) {}
  users: IUser[] = [];

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(
      (data) => (this.users = data),
      (error) => console.log(error)
    );
  }
}
