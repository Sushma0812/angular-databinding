import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
@Output() public parent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  forward(value){
    this.parent.emit(value);
  }

}
