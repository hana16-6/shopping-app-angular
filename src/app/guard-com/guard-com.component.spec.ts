import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardComComponent } from './guard-com.component';

describe('GuardComComponent', () => {
  let component: GuardComComponent;
  let fixture: ComponentFixture<GuardComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
