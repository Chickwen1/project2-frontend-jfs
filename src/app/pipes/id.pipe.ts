import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'id'
})
export class IdPipe implements PipeTransform {

  transform(items: any[]): any[] {
    if(!items) return [];
    if(sessionStorage.getItem('agendaId')) return items;
    // console.log('Category Pipe:' , selectedId);
    // return items.filter( it => {
    //   return it.id == selectedId;
   // });
  }
  

}
