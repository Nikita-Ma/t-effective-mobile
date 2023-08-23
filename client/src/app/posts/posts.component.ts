import {Component} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {HttpClient} from "@angular/common/http";
import {PostsService} from "./posts.service";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostsService]
})
export class PostsComponent {
  constructor(
    private titleService: Title,
    private http: HttpClient,
    private postsService: PostsService
  ) {
    this.titleService.setTitle('All posts')
  }

  // arrPosts: Array<{
  //   "userId": number ,
  //   "id": number ,
  //   "title": string ,
  //   "body": string
  // }> = []
  arrPosts: any = []

  ngOnInit() {
    // Rewrite on service posts.service.ts
    // this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe({next: (data: any) => this.arrPosts = data});
    console.log(this.postsService.getData())
    this.postsService.getData().subscribe({
      next: (data: any) => {
        this.arrPosts = data
      }
    })

  }

  protected readonly localStorage = localStorage;
  protected readonly JSON = JSON;
}
