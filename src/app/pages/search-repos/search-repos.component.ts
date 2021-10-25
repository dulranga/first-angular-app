import { Component, OnInit } from '@angular/core';
import { IRepository } from 'src/app/services/repositories/repositories.search';
import { RepositoriesService } from 'src/app/services/repositories/repositories.service';

@Component({
  selector: 'spicy-search-users',
  templateUrl: './search-repos.component.html',
  styleUrls: ['./search-repos.component.scss'],
})
export class SearchReposComponent implements OnInit {
  repos: IRepository[] = [];
  total = 0;
  constructor(private repoService: RepositoriesService) {}

  ngOnInit(): void {}

  searchRepos({ query }: { query: string }) {
    this.repoService.searchRepo(query).subscribe((data) => {
      this.repos = data.items;
      this.total = data.total_count;
    });
  }
}
