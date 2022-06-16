import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contentPipe'
})
export class ContentPipePipe implements PipeTransform {

  transform(arr: any,): any {
    let resArr: any=[];
    // arr.forEach((elem:any)=>resArr.push(elem+'Xx'));
    arr.forEach((elem:any)=>{
      let p = document.createElement('p')
      p.innerText=elem+'_new_in_p'
      resArr.push(p);
    });
    return resArr;
  }

}
