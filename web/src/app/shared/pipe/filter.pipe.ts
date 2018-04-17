import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNames'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string): any {
    if(value.length === 0 || filterString==''){
      return value;
    }
	  const resultArray = [];
    for (const item of value){
      if(item===filterString){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
