import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInputPageComponent } from './weather-input-page.component';

describe('WeatherInputPageComponent', () => {
  let component: WeatherInputPageComponent;
  let fixture: ComponentFixture<WeatherInputPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherInputPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherInputPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
