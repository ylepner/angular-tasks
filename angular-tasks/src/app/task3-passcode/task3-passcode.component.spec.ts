import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task3PasscodeComponent } from './task3-passcode.component';

describe('Task3PasscodeComponent', () => {
  let component: Task3PasscodeComponent;
  let fixture: ComponentFixture<Task3PasscodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task3PasscodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task3PasscodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
