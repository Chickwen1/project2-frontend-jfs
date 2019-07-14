import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(items: any[], selectedType: string): any[] {
    if(!items) return [];
    if(!selectedType) return items;
    console.log('Category Pipe:' , selectedType);
    return items.filter( it => {
      return it.type == selectedType;
    });
  }

}