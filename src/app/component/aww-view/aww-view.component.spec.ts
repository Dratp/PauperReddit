import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwwViewComponent } from './aww-view.component';

describe('AwwViewComponent', () => {
  let component: AwwViewComponent;
  let fixture: ComponentFixture<AwwViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwwViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwwViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
