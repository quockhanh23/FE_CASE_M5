import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../../../models/comment";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {CommentService} from "../../../services/comment.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent implements OnInit {
  @Input() houseId: any

  commentForm: FormGroup = this.fb.group({

    content: new FormControl(''),
  });

  constructor(private router: Router,
              private fb: FormBuilder,
              private commentService: CommentService) {
  }

  ngOnInit(): void {

  }

  submit() {
    let userId = JSON.parse(<string>localStorage.getItem("currentUser")).id;
    console.log(userId)
    console.log(this.houseId)
    let newComment = {
      home:{
        id: this.houseId
      },
      user: {
        id: userId
      },
      content: this.commentForm.value.content,
    }
    console.log(newComment)
    // @ts-ignore
    this.commentService.save(newComment).subscribe(() => {
    })
  }

}
