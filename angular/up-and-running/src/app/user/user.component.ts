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
      .green {
        color: green;
      }
    `
  ]
})
export class UserComponent {
  constructor() {}

  @Input() user: any;
  @Output() showAge = new EventEmitter();
}
