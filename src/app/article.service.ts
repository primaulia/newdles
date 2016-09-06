import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Article } from './article';
import { ARTICLES } from './mock/mock-article';

@Injectable()
export class ArticleService {
  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
  }
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor() { }

  getArticles(): Promise<Article[]> {
    return Promise.resolve(ARTICLES);
  }

  // create(name: string): Promise<Hero> {
  //     return this.http
  //                 .post(this.heroesUrl, JSON.stringify({name: name}), { headers: this.headers })
  //                 .toPromise()
  //                 .then(res => res.json().data)
  //                 .catch(this.handleError);
  // }


}
