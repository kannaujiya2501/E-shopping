import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbctestingComponent } from './abctesting.component';

describe('AbctestingComponent', () => {
  let component: AbctestingComponent;
  let fixture: ComponentFixture<AbctestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbctestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbctestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
