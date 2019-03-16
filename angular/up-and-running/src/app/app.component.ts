import { Component } from "@angular/core";
import users from "./users.mock";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "up-and-running";
  users = users;
}
