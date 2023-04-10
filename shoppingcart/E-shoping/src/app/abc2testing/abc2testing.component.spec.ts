import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Abc2testingComponent } from './abc2testing.component';

describe('Abc2testingComponent', () => {
  let component: Abc2testingComponent;
  let fixture: ComponentFixture<Abc2testingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Abc2testingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Abc2testingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
