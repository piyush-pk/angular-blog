import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent {
  @Input() details!: any;
  @Input() isDelete: boolean = false;
  @Output() deletePost = new EventEmitter<any>();

  deletePostEvent() {
    this.deletePost.emit(this.details);
  }
}
