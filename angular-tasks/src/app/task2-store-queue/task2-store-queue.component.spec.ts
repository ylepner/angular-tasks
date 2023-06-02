import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task2StoreQueueComponent } from './task2-store-queue.component';

describe('Task2StoreQueueComponent', () => {
  let component: Task2StoreQueueComponent;
  let fixture: ComponentFixture<Task2StoreQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task2StoreQueueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task2StoreQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
