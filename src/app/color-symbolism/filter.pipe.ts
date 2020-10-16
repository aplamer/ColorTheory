import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm: string): any {
    if(searchTerm === ''){
      return [];
    }
    const resultArray = [];

    big:
    for(const item of value){
      if(item.color.toUpperCase().includes(searchTerm.toUpperCase())){
        resultArray.push(item);
        continue;
      }
      for(const i of item.origin){
        if(i.toUpperCase().includes(searchTerm.toUpperCase())){
          resultArray.push(item);
          continue big;
        }
      }
      for(const i of item.meaning){
        if(i.toUpperCase().includes(searchTerm.toUpperCase())){
          resultArray.push(item);
          continue big;
        }
      }

    }
    
    if(resultArray.length == 0){
      resultArray.push(
        {
        color: "No Results found.",
        origin: "",
        meaning: "",
        style: ""
        }
      )
    }
    return resultArray;
  }

}
