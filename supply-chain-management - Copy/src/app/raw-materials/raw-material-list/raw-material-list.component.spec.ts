import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawMaterialListComponent } from './raw-material-list.component';

describe('RawMaterialListComponent', () => {
  let component: RawMaterialListComponent;
  let fixture: ComponentFixture<RawMaterialListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RawMaterialListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RawMaterialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
