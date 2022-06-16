import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NumService } from 'src/app/shared/num.service';
import { MainContentComponent } from '../main-content/main-content.component';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';

@Component({
  selector: 'app-elements-group',
  templateUrl: './elements-group.component.html',
  styleUrls: ['./elements-group.component.scss'],
})

export class ElementsGroupComponent implements OnInit {

  @Input() title = 'NoTitles';
  @Input() content: Array<number | string> = [1, 2];

  constructor(
    public dialog: MatDialog,
    public numService: NumService,
    public mainContent: MainContentComponent
  ) { }

  SingleTitle: string = '';
  InputValue: string = '';
  placeholder: string = '';

  openDialog() {
    this.dialog.open(MyDialogComponent);
  }

  clickHandler(event: any): void {
    this.numService.onClickService(event);
  }

  onResetHandler(event: any): void {

    let rootElem = event.path.filter((e: any) => e.localName === "app-elements-group")[0];
    const identity = rootElem.dataset.group;

    switch (identity) {
      case 'Numbers':
        this.mainContent.resetNumbers();
        break;
      case 'Facts':
        this.mainContent.resetFacts();
        break;
      case 'Dates':
        this.mainContent.resetDates();
        break;
      default:
        this.mainContent.resetAll();
        break;
    }
  }
  
  ngOnInit(): void {
    this.SingleTitle = (this.title.slice(0, this.title.length - 1)).toUpperCase();
    switch (this.SingleTitle) {
      case 'DATE':
        this.placeholder = 'write date/month';
        break;
      case 'NUMBER':
        this.placeholder = 'write number';
        break;
      case 'FACT':
        this.placeholder = 'write number';
        break;
      default:
        this.placeholder = 'write some num';
        break;
    }

  }

}