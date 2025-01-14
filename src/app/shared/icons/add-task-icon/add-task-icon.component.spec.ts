import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskIconComponent } from './add-task-icon.component';

describe('AddTaskIconComponent', () => {
  let component: AddTaskIconComponent;
  let fixture: ComponentFixture<AddTaskIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTaskIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTaskIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
