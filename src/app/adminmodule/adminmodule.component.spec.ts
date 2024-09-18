import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmoduleComponent } from './adminmodule.component';

describe('AdminmoduleComponent', () => {
  let component: AdminmoduleComponent;
  let fixture: ComponentFixture<AdminmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminmoduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
