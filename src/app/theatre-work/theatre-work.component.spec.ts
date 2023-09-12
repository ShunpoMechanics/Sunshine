import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatreWorkComponent } from './theatre-work.component';

describe('TheatreWorkComponent', () => {
  let component: TheatreWorkComponent;
  let fixture: ComponentFixture<TheatreWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheatreWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheatreWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
