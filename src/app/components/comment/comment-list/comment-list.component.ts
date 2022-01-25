import { Component, OnInit } from '@angular/core';
import {CommentService} from "../../../services/comment.service";
import {Comment} from "../../../models/comment";

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  comment!: Comment[]
  constructor(private commentService: CommentService,) { }

  ngOnInit(): void {
    this.commentService.getAll().subscribe(result => {
      // @ts-ignore
      this.comment = result
      console.log(result)
    }, error => {
      console.log(error)
    })
  }

}
