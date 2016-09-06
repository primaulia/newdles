import { Component, OnInit } from '@angular/core';

import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {
  articles: Article[];
  newArticle: Article;
  submitted: boolean = false;
  
  constructor(private articleService: ArticleService) { 
    this.newArticle = new Article();
  }

  ngOnInit() {
    this.articleService.getArticles().then(
        articles => {
          this.articles = articles;
        }
    );
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.newArticle); }


  onSubmit() { 
    this.submitted = true; 
    console.log('new articles are', this.newArticle);
    // @TODO when connect to a backend, change this
    this.articles.push(this.newArticle);
    this.newHero();
  } 

  newHero() {
    this.newArticle = new Article();
  }

  // addArticle(new_article: Article):void {
  //   console.log(this.newArticle);
  //   // @TODO when connect to a backend, change this
  //   this.articles.push(new_article);
  //   this.newArticle = new Article();
  // }
}
