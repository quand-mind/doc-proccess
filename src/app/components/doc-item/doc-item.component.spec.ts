import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocItemComponent } from './doc-item.component';

describe('DocItemComponent', () => {
  let component: DocItemComponent;
  let fixture: ComponentFixture<DocItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
