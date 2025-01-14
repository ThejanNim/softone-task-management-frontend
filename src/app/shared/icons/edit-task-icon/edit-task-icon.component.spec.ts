import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTaskIconComponent } from './edit-task-icon.component';

describe('EditTaskIconComponent', () => {
  let component: EditTaskIconComponent;
  let fixture: ComponentFixture<EditTaskIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTaskIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTaskIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
