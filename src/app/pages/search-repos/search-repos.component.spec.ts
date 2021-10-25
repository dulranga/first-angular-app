import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchReposComponent } from './search-repos.component';

describe('SearchUsersComponent', () => {
  let component: SearchReposComponent;
  let fixture: ComponentFixture<SearchReposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchReposComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
