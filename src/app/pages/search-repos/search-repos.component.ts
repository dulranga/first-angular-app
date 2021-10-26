import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IRepository } from 'src/app/services/repositories/repositories.search';
import { RepositoriesService } from 'src/app/services/repositories/repositories.service';

@Component({
  selector: 'angular-search-repos',
  templateUrl: './search-repos.component.html',
  styleUrls: ['./search-repos.component.scss'],
})
export class SearchReposComponent implements OnDestroy {
  constructor(private repoService: RepositoriesService) {}

  subscriptions: Subscription[] = [];
  repos: IRepository[] = [];
  total = 0;

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  searchRepos({ query }: { query: string }) {
    const subscription = this.repoService
      .searchRepo(query)
      .subscribe((data) => {
        this.repos = data.items;
        this.total = data.total_count;
      });
    this.subscriptions.push(subscription);
  }
}
