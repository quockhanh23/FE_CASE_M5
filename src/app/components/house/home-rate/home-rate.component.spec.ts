import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRateComponent } from './home-rate.component';

describe('HomeRateComponent', () => {
  let component: HomeRateComponent;
  let fixture: ComponentFixture<HomeRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
