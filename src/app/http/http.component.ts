import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {PostsService} from './posts.service';
import {Post} from './post.model';


@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent {
  loadedPosts: Post[] = [];
  isFetching = false;

  //
  constructor(private postsService: PostsService) { }

  //
  ngOnInit() { }

  //
  onCreatePost(postData: Post) {
    this.postsService.createAndStore(postData.title, postData.content)
      .subscribe((res) => {
        this.onFetchPosts();
      });
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe((posts) => {
      this.loadedPosts = posts;
      this.isFetching = false;
    });
  }

  onClearPosts() {
    this.postsService.deletePosts().subscribe((res) => {
      this.onFetchPosts();
    });
  }
}
