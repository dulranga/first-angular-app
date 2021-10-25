import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniRepoComponent } from './mini.component';

describe('MiniComponent', () => {
  let component: MiniRepoComponent;
  let fixture: ComponentFixture<MiniRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiniRepoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
