import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleBottomComponent } from './article-bottom.component';

describe('ArticleBottomComponent', () => {
  let component: ArticleBottomComponent;
  let fixture: ComponentFixture<ArticleBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
