import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NumService } from 'src/app/shared/num.service';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';

@Component({
  selector: 'app-elements-group',
  templateUrl: './elements-group.component.html',
  styleUrls: ['./elements-group.component.scss'],
})

export class ElementsGroupComponent implements OnInit {

  @Input() title = '';
  @Input() content: Array<number | string> = [1, 2];

  constructor(
    public dialog: MatDialog,
    public numService: NumService
  ) {

  }

  openDialog() {
    this.dialog.open(MyDialogComponent);
  }

  getYear = async () => {
    await fetch('http://numbersapi.com/2012/year?json')
      .then(res => res.json())
      // .then(data => console.log(data.text));
      .then(data => console.log(data.text));
  };


  // clickHandler = async (event: any): Promise<void> => {
  //   // console.log(event.srcElement.innerText);
  //   // console.log(event.path[3].dataset.group);
  //   // 'Numbers' | 'Facts' | 'Dates'
  //   const value = event.srcElement.innerText;
  //   const identity = event.path[3].dataset.group;
  //   let message = event.srcElement.innerText;
  //   switch (identity) {
  //     case 'Numbers':
  //       console.log('GET_NUMBERS ' + value);
  //       message = await this.getYear();
  //       break;
  //     case 'Facts':
  //       console.log('GET_FACTS ' + value);
  //       message = await this.getYear();
  //       break;
  //     case 'Dates':
  //       console.log('GET_DATES ' + value);
  //       message = await this.getYear();
  //       break;
  //     default:
  //       console.log('GET_NUMBERS ' + value)
  //       message = await this.getYear();
  //       break;
  //   }

  //   this.numService.onClickService(event, value, identity, message);
  //   this.openDialog()

  // }
  clickHandler(event: any):void {
    // console.log(event.srcElement.innerText);
    // console.log(event.path[3].dataset.group);
    // 'Numbers' | 'Facts' | 'Dates'
    // const value = event.srcElement.innerText;
    // const identity = event.path[3].dataset.group;
    // let message = event.srcElement.innerText;
    // switch (identity) {
    //   case 'Numbers':
    //     console.log('GET_NUMBERS ' + value);
    //     message = await this.getYear();
    //     break;
    //   case 'Facts':
    //     console.log('GET_FACTS ' + value);
    //     message = await this.getYear();
    //     break;
    //   case 'Dates':
    //     console.log('GET_DATES ' + value);
    //     message = await this.getYear();
    //     break;
    //   default:
    //     console.log('GET_NUMBERS ' + value)
    //     message = await this.getYear();
    //     break;
    // }

    this.numService.onClickService(event);
    // this.openDialog()

  }
  ngOnInit(): void {

  }
}