import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullwidthuserComponent } from './fullwidthuser.component';

describe('FullwidthuserComponent', () => {
  let component: FullwidthuserComponent;
  let fixture: ComponentFixture<FullwidthuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullwidthuserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullwidthuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
