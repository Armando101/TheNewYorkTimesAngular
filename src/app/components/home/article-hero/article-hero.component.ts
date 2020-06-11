import { Component, OnInit } from '@angular/core';

import { ArticlesService } from '../services/articles.service';
import { ArticleHero } from '../models/articleHero';

@Component({
  selector: 'app-article-hero',
  templateUrl: './article-hero.component.html',
  styleUrls: ['./article-hero.component.scss']
})
export class ArticleHeroComponent implements OnInit {

	public articleHero: ArticleHero;

  constructor(
  	private _articleService: ArticlesService
  ) { }

  ngOnInit(): void {
  	this.articleHero = this._articleService.getArticleHero();
  }

}
