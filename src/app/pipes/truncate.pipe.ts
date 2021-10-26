import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string | null, number: number): unknown {
    return value && value?.length > number
      ? value?.slice(0, number) + '...'
      : value;
  }
}
