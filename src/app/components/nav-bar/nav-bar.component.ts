import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  links = [
    { name: 'Repos', link: '/search/repos' },
    { name: 'Users', link: '/users' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
