import { Component, OnInit } from '@angular/core';

import { ArticlesService } from '../services/articles.service';
import { ArticleMiddle } from '../models/articleMiddle';

@Component({
  selector: 'app-article-middle',
  templateUrl: './article-middle.component.html',
  styleUrls: ['./article-middle.component.scss']
})
export class ArticleMiddleComponent implements OnInit {

	public articleMiddle: ArticleMiddle;

  constructor(
  	private _articleService: ArticlesService
  ) { }

  ngOnInit(): void {
  	this.articleMiddle = this._articleService.getArticleMiddle();
  }

}
