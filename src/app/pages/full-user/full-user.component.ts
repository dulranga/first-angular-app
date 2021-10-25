import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFullUser } from 'src/app/services/users/user';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'spicy-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.scss'],
})
export class FullUserComponent implements OnInit {
  user?: IFullUser;

  constructor(
    private userService: UsersService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const username = this.router.snapshot.params.username;

    this.userService.getUserByUsername(username).subscribe((data) => {
      this.user = data;
    });
  }
}
