import { Component } from "@angular/core";
import UserService from "./service/user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  users: {
    id: string;
    name: string;
    email: string;
    jobTitle: string;
    image: string;
  }[];
  constructor(private userService: UserService) {}
  title = "up-and-running";
  ngOnInit() {
    setTimeout(() => {
      this.users = this.userService.getUsers();
    }, 2500);
  }
}
