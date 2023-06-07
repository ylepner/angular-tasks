import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task4AddBlocksComponent } from './task4-add-blocks.component';

describe('Task4AddBlocksComponent', () => {
  let component: Task4AddBlocksComponent;
  let fixture: ComponentFixture<Task4AddBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task4AddBlocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task4AddBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
