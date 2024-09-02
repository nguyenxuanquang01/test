import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableCustomComponent } from './mat-table-custom.component';

describe('MatTableCustomComponent', () => {
  let component: MatTableCustomComponent;
  let fixture: ComponentFixture<MatTableCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatTableCustomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatTableCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
