import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegTablaComponent } from './reg-tabla.component';

describe('RegTablaComponent', () => {
  let component: RegTablaComponent;
  let fixture: ComponentFixture<RegTablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegTablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
