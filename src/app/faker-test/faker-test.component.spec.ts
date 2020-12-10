import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakerTestComponent } from './faker-test.component';

describe('FakerTestComponent', () => {
  let component: FakerTestComponent;
  let fixture: ComponentFixture<FakerTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakerTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakerTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
