import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-elements-group',
  templateUrl: './elements-group.component.html',
  styleUrls: ['./elements-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementsGroupComponent implements OnInit {

  @Input() title = '';
  @Input() content: Array<number | string> = [1, 2];

  constructor() { }

  clickHandler(event: any) {
    // console.log(event.srcElement.innerText);
    // console.log(event.path[3].dataset.group);
    // 'Numbers' | 'Facts' | 'Dates'
    const value = event.srcElement.innerText;
    const identity = event.path[3].dataset.group;
    switch (identity) {
      case 'Numbers':
        console.log('GET_NUMBERS ' + value)
        break;
      case 'Facts':
        console.log('GET_FACTS ' + value)
        break;
      case 'Dates':
        console.log('GET_DATES ' + value)
        break;
      default:
        console.log('GET_NUMBERS ' + value)
        break;
    }
  }
  ngOnInit(): void {

  }
}