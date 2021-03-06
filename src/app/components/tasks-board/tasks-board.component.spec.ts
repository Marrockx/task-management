import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksBoardComponent \ } from "./TasksBoardComponent";

describe('TasksBoardComponent', () => {
  let component: TasksBoardComponent;
  let fixture: ComponentFixture<TasksBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TasksBoardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
