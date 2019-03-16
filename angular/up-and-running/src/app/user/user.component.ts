import { Component, OnInit, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styles: [
    `
      .red {
        color: red;
      }
    `
  ]
})
export class UserComponent implements OnInit {
  constructor() {}
  innerAge = 90;
  ngOnInit() {}
  handleClick() {
    this.showAge.emit();
  }
  log = console.log;
  @Input() user: any;
  @Output() showAge = new EventEmitter();
}
