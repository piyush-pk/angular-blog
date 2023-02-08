import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  msg!:any;
  constructor(private router: Router, private _postService: PostService) { }

  posts:any;
    ngOnInit(): void {
      this._postService.getAllPost().subscribe(res => this.posts = res.body)
    }
}
