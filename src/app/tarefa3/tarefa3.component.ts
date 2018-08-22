import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefa3',
  templateUrl: './tarefa3.component.html',
  styleUrls: ['./tarefa3.component.css']
})
export class Tarefa3Component implements OnInit {
    visible = false;
    log = [];
    

  constructor() { }

  ngOnInit() {
  }

  onDisplayDetails(){
    this.visible = !this.visible;
    this.log.push(this.log.length + 1);
  }


}
