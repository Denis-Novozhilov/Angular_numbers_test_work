import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MyDialogComponent } from "../components/my-dialog/my-dialog.component";

@Injectable({ providedIn: 'root' })

export class NumService {

    constructor(
        public dialog: MatDialog,
    ) { }

    // public currentValue: string | number = 'empty_currentValue';
    public currentValue: string | number = '';
    public currentIdentity: 'Numbers' | 'Facts' | 'Dates' | 'Empty_Identitys' = 'Empty_Identitys';
    public currentMessage: string | number = 'empty_currentMessage';
    public isMessageLoaded: boolean = false;

    reset(): void {
        this.currentValue = 'empty_currentValue';
        this.currentIdentity = 'Empty_Identitys';
        this.currentMessage = 'empty_currentMessage';
        this.isMessageLoaded = false;
    }

    getMathInfo = async (num: number) => {
        if (!num) {
            num = 0;
            this.currentValue = 0;
        }
        await fetch(`http://numbersapi.com/${num}/math?json`)
            .then(res => res.json())
            .then(data => {
                console.log(data.text);
                this.isMessageLoaded = true;
                this.currentMessage = data.text;
            }
            );
    };

    getFactInfo = async (num: number) => {
        if (!num) {
            num = 0;
            this.currentValue = 0;
        }
        await fetch(`http://numbersapi.com/${num}?json`)
            .then(res => res.json())
            .then(data => {
                console.log(data.text);
                this.isMessageLoaded = true;
                this.currentMessage = data.text;
            }
            );
    };

    getDateInfo = async (date: string) => {
        if (!date) {
            date = '1/1';
            this.currentValue = '1/1';
        }
        const dateArr = date.split('/');

        if (dateArr.length !== 2 || !dateArr[0] || !dateArr[1]) {
            // const day = 1;
            // const month = 1;
            this.isMessageLoaded = true;
            this.currentMessage = `Wrong format. Write date in format DAY/MONTH`;
            return;
        } else {
            const day = dateArr[0];
            const month = dateArr[1];
            await fetch(`http://numbersapi.com/${month}/${day}/date?json`)
                .then(res => res.json())
                .then(data => {
                    console.log(data.text);
                    this.isMessageLoaded = true;
                    this.currentMessage = data.text;
                }
                );
        }

    };

    openDialog() {
        this.dialog.open(MyDialogComponent);
    }

    async onClickService(event: any): Promise<void> {

        let rootElem = event.path.filter((e: any) => e.localName === "app-elements-group")[0];
        const identity = rootElem.dataset.group;
        const value = event.srcElement.innerText;

        this.getApiInfoToDialog(value, identity);
    }

    async onInputGetService(event: any, inputValue: string | number): Promise<void> {

        let rootElem = event.path.filter((e: any) => e.localName === "app-elements-group")[0];
        const identity = rootElem.dataset.group;
        const value = inputValue;

        this.getApiInfoToDialog(value, identity);
    }

    async getApiInfoToDialog(value: any, identity: any): Promise<any> {

        switch (identity) {
            case 'Numbers':
                await this.getMathInfo(value);
                break;
            case 'Facts':
                await this.getFactInfo(value);
                break;
            case 'Dates':
                await this.getDateInfo(value);
                break;
            default:
                await this.getMathInfo(value);
                break;
        }

        this.currentValue = value;

        this.currentIdentity = identity;

        this.openDialog()
    }
}