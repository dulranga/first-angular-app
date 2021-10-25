import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullUserComponent } from './full-user.component';

describe('FullUserComponent', () => {
  let component: FullUserComponent;
  let fixture: ComponentFixture<FullUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
