import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MyDialogComponent } from "../components/my-dialog/my-dialog.component";

@Injectable({ providedIn: 'root' })

export class NumService {

    constructor(
        public dialog: MatDialog,
    ) { }

    public currentValue: string | number = 'empty_currentValue';
    public currentIdentity: 'Numbers' | 'Facts' | 'Dates' | 'Emptys' = 'Emptys';
    public currentMessage: string | number = 'empty_currentMessage';
    public isMessageLoaded: boolean = false;

    getMathInfo = async (num: number) => {
        await fetch(`http://numbersapi.com/${num}/math?json`)
            .then(res => res.json())
            .then(data => {
                console.log(data.text);
                this.currentMessage = data.text
                this.isMessageLoaded = true;
            }
            );
    };

    getFactInfo = async (num: number) => {
        await fetch(`http://numbersapi.com/${num}?json`)
            .then(res => res.json())
            .then(data => {
                console.log(data.text);
                this.currentMessage = data.text
                this.isMessageLoaded = true;
            }
            );
    };

    getDateInfo = async (date: string) => {
        const dateArr = date.split('/');
        const day = dateArr[0];
        const month = dateArr[1];
        await fetch(`http://numbersapi.com/${month}/${day}/date?json`)
            .then(res => res.json())
            .then(data => {
                console.log(data.text);
                this.currentMessage = data.text
                this.isMessageLoaded = true;
            }
            );
    };

    openDialog() {
        this.dialog.open(MyDialogComponent);
    }

    async onClickService(event: any): Promise<void> {

        const value = event.srcElement.innerText;
        const identity = event.path[3].dataset.group;

        let message = event.srcElement.innerText;
        switch (identity) {
            case 'Numbers':
                message = await this.getMathInfo(value);
                break;
            case 'Facts':
                message = await this.getFactInfo(value);
                break;
            case 'Dates':
                message = await this.getDateInfo(value);
                break;
            default:
                message = await this.getMathInfo(value);
                break;
        }

        this.currentValue = value;
        this.currentIdentity = identity;

        this.openDialog()
    }
}