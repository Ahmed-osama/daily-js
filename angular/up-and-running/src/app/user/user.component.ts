import { Component, OnInit, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  handleClick() {
    this.showAge.emit();
  }
  @Input() user: any;
  @Output() showAge = new EventEmitter();
}
