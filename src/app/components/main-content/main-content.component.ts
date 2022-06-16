import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {

  constructor() { }

  mainTitle = "Angular App - test work 1/2";
  contentArray: number[] = [];
  contentArrayNumbers: number[] = [];
  contentArrayFacts: number[] = [];
  contentArrayDates: string[] = [];

  getDaysArray(count: number = 5): Array<string> {
    let res: Array<string> = [];
    res = this.getContentRandomArray(count, 0, 30)
      .map(date => `${date}/${this.getRandomNumber(0, 12)}`)
    return res;
  }
  getRandomNumber(min: number, max: number): number {
    return Math.ceil(Math.abs((Math.random() * max) - (Math.random() * min)))
  }
  getContentRandomArray(count: number = 5, min: number = 0, max: number = 100): Array<number> {
    const res = [];
    do {
      res.push(this.getRandomNumber(min, max));
      count--;
    } while (count);
    return res;
  }
  ngOnInit(): void {
    this.contentArrayNumbers = this.getContentRandomArray(8, 0, 10);
    this.contentArrayFacts = this.getContentRandomArray(8, 0, 100);
    this.contentArrayDates = this.getDaysArray(8);
  }

}
