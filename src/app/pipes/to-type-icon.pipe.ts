import { Pipe, PipeTransform } from '@angular/core';
import { Type } from '../calendar/components/add-event/typeEnum';

@Pipe({
  name: 'toTypeIcon'
})
export class ToTypeIconPipe implements PipeTransform {

  transform(value: Type): string {
    switch(value) {
      case     'exam': return 'report';
      case     'quiz': return 'school';
      case 'homework': return 'home_work';
      case    'other': return 'event';
      default:         return 'error';
    }
  }
}
