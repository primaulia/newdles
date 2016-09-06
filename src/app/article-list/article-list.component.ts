import { Component, OnInit } from '@angular/core';

import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  articles: Article[];

  constructor(
    private articleService: ArticleService
  ) { }

  getArticles(): void {
    this.articleService.getArticles()
                        .then(articles => this.articles = articles);
  }

  ngOnInit(): void {
    this.getArticles();
  }

}
