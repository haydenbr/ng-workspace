import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpokeSharedComponent } from './spoke-shared.component';

describe('SpokeSharedComponent', () => {
  let component: SpokeSharedComponent;
  let fixture: ComponentFixture<SpokeSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpokeSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpokeSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
