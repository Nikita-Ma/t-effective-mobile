import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PostsService {

  constructor(
    private http: HttpClient
  ) {
  }

  // TODO: Shoot in leg
  getData(): any {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
