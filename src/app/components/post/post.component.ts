import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  constructor(
    private _route: ActivatedRoute,
    private _postService: PostService
  ) {}

  details:any;
  ngOnInit(): void {
    this._route.params
      .pipe(switchMap((par: any) => this._postService.getPost(par.id)))
      .subscribe((res) => this.details = res.body);
  }
}
