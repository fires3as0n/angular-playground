import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from './post.model';
import {map} from 'rxjs/operators';

type postResponse = {
  [key: string]: Post
};

@Injectable({providedIn: 'platform'})
export class PostsService {
  constructor(private http: HttpClient) {
  }

  createAndStore(title: string, content: string) {
    const postData: Post = {title, content};

    return this.http.post<{name: string}>(
      'https://first-angular-app-65b87.firebaseio.com/posts.json',
      postData
    );
  }

  fetchPosts() {
    return this.http.get<postResponse>('https://first-angular-app-65b87.firebaseio.com/posts.json')
      .pipe(map((postRes) => {
        const mapped: Post[] = [];
        for (let key in postRes) {
          mapped.push({id: key, ...postRes[key]});
        }
        return mapped;
      }));
  }

  deletePosts() {
    return this.http.delete('https://first-angular-app-65b87.firebaseio.com/posts.json');
  }
}
