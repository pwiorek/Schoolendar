import { Pipe, PipeTransform } from '@angular/core';
import { Type } from '../calendar/components/add-event/typeEnum';

@Pipe({
  name: 'toTypeIcon'
})
export class ToTypeIconPipe implements PipeTransform {

  transform(value: Type): string {
    switch(value) {
      case     Type.EXAM: return 'report';
      case     Type.QUIZ: return 'school';
      case Type.HOMEWORK: return 'home_work';
      case    Type.OTHER: return 'event';
      default:            return 'error';
    }
  }
}
