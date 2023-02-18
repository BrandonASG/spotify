import { TrackModel } from './../../core/models/tracks.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {

  transform(value: Array<any>, args: string | null = null, sort:string = 'asc'): Array<any> {
    
    try{
      if(args == null){
        return value
      } else {
        const tmpList = value.sort((a,b) => {
          if (a[args] < b[args]) {
            return -1
          }
          else if (a[args] == b[args]) {
            return 0;
          }
          else if (a[args] > b[args]) {
            return 1;
          }
          return 1
        });

        return (sort == 'asc') ? tmpList : tmpList.reverse()
      }
    } catch (e) {
      console.log('❌','Algo pasó:')
      return value
    }
    console.log('👉', value) 
    console.log('🌵', args)
    console.log('🍄', sort) 
    return value
  }
}
