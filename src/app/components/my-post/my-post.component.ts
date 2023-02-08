import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { ShowToastrService } from 'src/app/services/show-toastr.service';

@Component({
  selector: 'app-my-post',
  templateUrl: './my-post.component.html',
  styleUrls: ['./my-post.component.css']
})
export class MyPostComponent implements OnInit {
  constructor (private _postService: PostService, private _toastr: ShowToastrService){}

  posts!: any[];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._postService.myPost().subscribe((res:any) => this.posts = res.body);
  }

  deletePost(post:any) {
    this._postService.deletePost(post._id).subscribe(res=>{
      this._toastr.showToastr(res.body, true);
      const toRemove = this.posts.indexOf(post);
      this.posts.splice(toRemove, 1);
    });
  }

}
