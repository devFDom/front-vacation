import { Pipe, PipeTransform } from '@angular/core';
import { Properties } from './model/properties';

@Pipe({
  name: 'filterDate'
})
export class FilterDatePipe implements PipeTransform {

  transform(properties: Properties[], filterText: String){
    if(properties.length === 0 || filterText === ''){
      return properties;
    } else {
      return properties.filter((properties) =>
      {
        return properties.Date.toLowerCase() === filterText.toLowerCase()
      })
    }
  }
}
