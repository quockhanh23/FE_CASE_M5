import {Component, Input, OnInit} from '@angular/core';
import {CommentService} from "../../../services/comment.service";
import {Comment} from "../../../models/comment";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  commentForm: FormGroup = this.fb.group({

    content: new FormControl(''),
  });
  @Input() houseId?: String
  comment: Comment[] =[]
  constructor(private commentService: CommentService,private router: Router,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.commentService.getById(this.houseId).subscribe(result => {
      // @ts-ignore
      this.comment = result
      console.log(result)
    }, error => {
      console.log(error)
    })
  }

  getAll(){
    this.commentService.getById(this.houseId).subscribe(result => {
      // @ts-ignore
      this.comment = result
      console.log(result)
    }, error => {
      console.log(error)
    })
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
      this.getAll()
    })
  }

}
