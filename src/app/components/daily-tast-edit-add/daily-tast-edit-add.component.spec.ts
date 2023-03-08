import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTastEditAddComponent } from './daily-tast-edit-add.component';

describe('DailyTastEditAddComponent', () => {
  let component: DailyTastEditAddComponent;
  let fixture: ComponentFixture<DailyTastEditAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyTastEditAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyTastEditAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
