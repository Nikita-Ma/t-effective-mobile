import {PostsComponent} from "./posts/posts.component";

export const exitAboutGuard=(component: PostsComponent) =>{
  if(!component.saved){
    return confirm("Вы хотите покинуть страницу?");
  }
  return true;
}
