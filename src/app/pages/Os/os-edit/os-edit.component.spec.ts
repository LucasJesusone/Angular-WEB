import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsEditComponent } from './os-edit.component';

describe('OsEditComponent', () => {
  let component: OsEditComponent;
  let fixture: ComponentFixture<OsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OsEditComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
