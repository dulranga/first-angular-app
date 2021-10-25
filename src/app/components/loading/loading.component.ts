import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spicy-loading',
  template: ` <p>Loading</p> `,
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
