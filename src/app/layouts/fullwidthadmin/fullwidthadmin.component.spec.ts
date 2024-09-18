import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullwidthadminComponent } from './fullwidthadmin.component';

describe('FullwidthadminComponent', () => {
  let component: FullwidthadminComponent;
  let fixture: ComponentFixture<FullwidthadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullwidthadminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullwidthadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
