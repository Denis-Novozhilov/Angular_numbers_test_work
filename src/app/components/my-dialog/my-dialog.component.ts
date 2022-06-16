import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NumService } from 'src/app/shared/num.service';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.scss']
})
export class MyDialogComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public numService: NumService
    ) {

  }
  
  singleIdentity = this.numService.currentIdentity.slice(0,this.numService.currentIdentity.length - 1);

  title: any = "NoTitle";

  onNoClick(): void {
    this.dialog.closeAll();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.numService.reset();
  }

}
