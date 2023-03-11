import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  ellipse = '...';

  transform(value: any, limit: any): unknown {
    if (!value) return '';
    const isValid = value && limit && value.length > limit;
    const truncated = isValid
      ? value.substring(0, limit) + this.ellipse
      : value;
    return truncated;
  }
}
