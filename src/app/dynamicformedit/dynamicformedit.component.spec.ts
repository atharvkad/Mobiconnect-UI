import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicformeditComponent } from './dynamicformedit.component';

describe('DynamicformeditComponent', () => {
  let component: DynamicformeditComponent;
  let fixture: ComponentFixture<DynamicformeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicformeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicformeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
