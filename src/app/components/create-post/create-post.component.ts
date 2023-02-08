import { Component, ViewChild } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
import { PostService } from 'src/app/services/post.service';
import { ShowToastrService } from 'src/app/services/show-toastr.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService],
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {

  constructor(private _postService: PostService, private _toastr: ShowToastrService) {}

  title: string = 'This is post Title....';

  public tools: object = {
    items: ['Undo', 'Redo', '|',
        'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
        'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
        'SubScript', 'SuperScript', '|',
        'LowerCase', 'UpperCase', '|',
        'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
        'CreateTable', 'Indent', 'Outdent', '|', 'CreateLink',
        'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen', ]
};

public quickTools: object = {
  image: [
      'Replace', 'Align', 'Caption', 'Remove', 'InsertLink', '-', 'Display', 'AltText', 'Dimension']
};

@ViewChild('richTextEditor')
public details!: RichTextEditorComponent;

createPost() {
  let details = this.details.getHtml();
  const data = {"title": this.title, "description": details}
  this._postService.createPost(data).subscribe(res => {
    this._toastr.showToastr(res.body, true)
  })
}

}
