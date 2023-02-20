import { Component, Injectable, OnInit } from '@angular/core';
import { PostService } from './postServices/post.service';
import { Post } from './model/post';
import { ContactService } from './contact/contact.service';

@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'blog';
  posts: any = [];

  constructor(
    private postService: PostService,
    private contactService: ContactService
  ) {}

  async ngOnInit(): Promise<void> {
    this.getAllpost();
  }

  async getAllpost() {
    const response = this.postService.getPost().subscribe((data) => {
      const response = data;
      this.posts = response;
    });
  }
  sendMessage(message: any) {
    console.log(message, 'Message delivered to the parent');
    const result = this.contactService
      .sendMessage(message)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
