import {Component} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle('All posts')
  }

  longText = `lorem loremloremloremloremloremloremloreml
  oremloremloremloremloremloremloremloreml
  oremloremloremloremloremloremloremloreml
  oremloremloremloremloremloremlorem`;
}
