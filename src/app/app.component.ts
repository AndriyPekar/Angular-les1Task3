import { Component } from '@angular/core';
import {PostModel} from "../models/postModel";
import {PostService} from "./services/post.service";
import {CommentService} from "./services/comment.service";
import {CommentModel} from "../models/commentModel";

@Component({
  selector: 'app-root',
  template: `<h2 class="post">{{msgPost}}</h2>
  <app-post *ngFor="let p of posts" [post]="p"></app-post>
    <h2 class="comment">{{msgComment}}</h2>
    <app-comment *ngFor="let com of comments" [comment]="com"></app-comment>
  `,
  styles: [`.post{background: silver} .comment{background: aqua;} `]
})
export class AppComponent {
  msgPost = 'posts from JSON';
  posts: PostModel[];
  msgComment = 'comment from JSON';
  comments: CommentModel[];
  constructor(  private postsServices: PostService, private commentServices: CommentService){
    this.postsServices.getPosts().subscribe(value => {
      this.posts = value;
    } );
    this.commentServices.getComments().subscribe(value => {
    this.comments = value;
    });
  }
}
