import { Component, ViewChild } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
import { PostService } from 'src/app/services/post.service';
import { ShowToastrService } from 'src/app/services/show-toastr.service';
import * as filestack from 'filestack-js';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService],
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  client:any; // for filestack api
  thumbnail!:string;
  constructor(private _postService: PostService, private _toastr: ShowToastrService) {
    this.client = filestack.init('AkJLgUovVSGiTXrMxMnq7z');
  }

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
  if(this.thumbnail) {
    let details = this.details.getHtml();
    const post = new FormData();
    post.append("title", this.title);
    post.append( "description", details);
    post.append( "thumbnail", this.thumbnail);
    this._postService.createPost(post).subscribe(res => {
      this._toastr.showToastr(res.body, true)
    })
    console.log(post);
    return;
  }
  this._toastr.showToastr('Please Upload Thumbnail For Your Post !!!', false);
}

showPicker() {
  const options = {
    accept: ["image/*"],
    maxFiles: 1,
    uploadInBackground: false,
    onUploadDone: (res:any) => {
      this.thumbnail = res.filesUploaded[0].url,
      this._toastr.showToastr('Thumbnail Uploaded Successfully', false);
    },
  };
  this.client.picker(options).open();
}

}
