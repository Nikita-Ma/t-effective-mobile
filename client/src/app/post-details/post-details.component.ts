import {Component, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";

interface IPostDetails {
  "userId": number | undefined;
  "id": number | undefined;
  "title": string | undefined;
  "body": string | undefined
}


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {
  id: number | undefined
  arrPostDetails: IPostDetails = {
    "userId": undefined,
    "id": undefined,
    "title": undefined,
    "body": undefined,
  }

  private routeSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    this.routeSub = route.params.subscribe((v) => this.id = v['id'])
  }

  ngOnInit() {
    this.http.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`).subscribe({next: (data: any) => this.arrPostDetails = data})
  }

  protected readonly localStorage = localStorage;
}
