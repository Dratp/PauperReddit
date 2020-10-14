import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealstuffViewComponent } from './realstuff-view.component';

describe('RealstuffViewComponent', () => {
  let component: RealstuffViewComponent;
  let fixture: ComponentFixture<RealstuffViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealstuffViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealstuffViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
