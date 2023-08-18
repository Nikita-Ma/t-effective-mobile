import {Component} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  constructor(
    private titleService: Title,
    private http: HttpClient
  ) {
    this.titleService.setTitle('All posts')
  }

  longText = `lorem loremloremloremloremloremloremloreml
  oremloremloremloremloremloremloremloreml
  oremloremloremloremloremloremloremloreml
  oremloremloremloremloremloremlorem`;

  arrPosts: Array<{
    "userId": number
    "id": number
    "title": string,
    "body": string
  }> = []

  ngOnInit() {
    // Rewrite on service posts.service.ts
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe({next: (data: any) => this.arrPosts = data});
  }

}
