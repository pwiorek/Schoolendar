import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toTypeIcon'
})
export class ToTypeIconPipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case     'exam': return 'report';
      case     'quiz': return 'school';
      case 'homework': return 'home_work';
      case    'other': return 'event';
      default:         return 'error';
    }
  }
}
