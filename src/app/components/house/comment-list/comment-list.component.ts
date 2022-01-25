import {Component, Input, OnInit} from '@angular/core';
import {CommentService} from "../../../services/comment.service";
import {Comment} from "../../../models/comment";

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  @Input() id?: String
  comment: Comment[] =[]
  constructor(private commentService: CommentService,) { }

  ngOnInit(): void {

    this.commentService.getById(this.id).subscribe(result => {
      // @ts-ignore
      this.comment = result
      console.log(result)
    }, error => {
      console.log(error)
    })
  }

}
