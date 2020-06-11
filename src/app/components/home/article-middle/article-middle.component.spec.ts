import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleMiddleComponent } from './article-middle.component';

describe('ArticleMiddleComponent', () => {
  let component: ArticleMiddleComponent;
  let fixture: ComponentFixture<ArticleMiddleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleMiddleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
