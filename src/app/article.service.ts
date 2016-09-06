import { Injectable } from '@angular/core';

import { Article } from './article';
import { ARTICLES } from './mock/mock-article';

@Injectable()
export class ArticleService {

  constructor() { }

  getArticles(): Promise<Article[]> {
    return Promise.resolve(ARTICLES);
  }

}
