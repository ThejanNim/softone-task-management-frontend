import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTaskIconComponent } from './delete-task-icon.component';

describe('DeleteTaskIconComponent', () => {
  let component: DeleteTaskIconComponent;
  let fixture: ComponentFixture<DeleteTaskIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteTaskIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTaskIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
