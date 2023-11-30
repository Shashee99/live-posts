import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../post.model";
import {PostService} from "../post.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{
  @Input() post?:Post;
  @Input()index?:number;
  constructor(
    private postService : PostService,
    private router:Router
  ) {
  }
  ngOnInit(): void {
    console.log(this.post)

  }

  onDelete() {
    this.postService.deletePost(this.index)
  }

  onEdit() {
    this.router.navigate(['/post-edit',this.index])
  }

  onClickLike() {
 this.postService.likePost(this.index)
  }
}
