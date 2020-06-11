import { Component, OnInit } from '@angular/core';

import { ArticlesService } from '../services/articles.service';
import { ArticleBottom } from '../models/articleBottom';

@Component({
  selector: 'app-article-bottom',
  templateUrl: './article-bottom.component.html',
  styleUrls: ['./article-bottom.component.scss']
})
export class ArticleBottomComponent implements OnInit {

	public articleBottom: ArticleBottom;

  constructor(
  	private _articleService: ArticlesService
  ) { }

  ngOnInit(): void {
  	this.articleBottom = this._articleService.getArticleBottom();
  }

}
