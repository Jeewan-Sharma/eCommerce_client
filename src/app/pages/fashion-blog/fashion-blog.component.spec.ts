import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionBlogComponent } from './fashion-blog.component';

describe('FashionBlogComponent', () => {
  let component: FashionBlogComponent;
  let fixture: ComponentFixture<FashionBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashionBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FashionBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
