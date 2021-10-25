import { Component, Input, OnInit } from '@angular/core';
import { IRepository } from 'src/app/services/repositories/repositories.search';

@Component({
  selector: 'spicy-mini-repo',
  templateUrl: './mini.component.html',
  styleUrls: ['./mini.component.scss'],
})
export class MiniRepoComponent implements OnInit {
  @Input() repo!: IRepository;
  constructor() {}

  ngOnInit(): void {}
}
