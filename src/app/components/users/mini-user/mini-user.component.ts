import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/services/users/user';

@Component({
  selector: 'spicy-mini-user',
  templateUrl: './mini-user.component.html',
  styleUrls: ['./mini-user.component.scss'],
})
export class MiniUserComponent implements OnInit {
  @Input() user!: IUser;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToInfo(username: string) {
    this.router.navigate(['/users', username]);
  }
}
