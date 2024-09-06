import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsMenuComponent } from './docs-menu.component';

describe('DocsMenuComponent', () => {
  let component: DocsMenuComponent;
  let fixture: ComponentFixture<DocsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocsMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
