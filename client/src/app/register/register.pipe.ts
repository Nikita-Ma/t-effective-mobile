import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'register',
  // pure: true / false
})
export class RegisterPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.toLowerCase() + Date.now();
  }

}
