import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniUserComponent } from './mini-user.component';

describe('MiniUserComponent', () => {
  let component: MiniUserComponent;
  let fixture: ComponentFixture<MiniUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
