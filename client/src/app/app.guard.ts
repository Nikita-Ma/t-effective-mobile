import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";

export const appGuard = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

  // получаем id
  console.log(route);
  return confirm('Вы уверены, что хотите перейти?');

  // остальной код
}
