import { Component, OnInit } from '@angular/core';

@Component ({
    selector: 'app-warningAlert',
    templateUrl: './warningAlert.component.html',
    styleUrls: ['./warning-alert.component.css']
})

export class warningAlertComponent implements OnInit {
    warningAlertMsg = '';
    msgTyped = '';
    
    constructor() { }

    ngOnInit() {
    }

    onConfirmWarningMsg() {
        this.warningAlertMsg = 'Message typed: ' + this.msgTyped;
        this.msgTyped = '';
    }

}