import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'id'
})
export class IdPipe implements PipeTransform {

    transform(items: any[], agendaId: number): any[] {
      if(!items) return [];
      if(!agendaId) return items;
      console.log('Category Pipe:' , agendaId);
      return items.filter( it => {
        return it.agendaId == agendaId;
      });
    }
  

}
