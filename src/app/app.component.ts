import { Component, Injectable, OnInit } from '@angular/core';
import { PostService } from './postServices/post.service';
import { Post } from './model/post';

@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'blog';
  posts: any = [];

  constructor(private postService: PostService) {}

  async ngOnInit(): Promise<void> {
    const response = this.postService.getPost().subscribe((data) => {
      const response = data;
      this.posts = response;
    });
  }
}
