import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "up-and-running";
  user = {
    name: "Ahmed osama",
    age: null
  };

  handleShowAge(e) {
    console.log(e);
    if (!this.user.age) {
      this.user.age = 28;
      return;
    }
    this.user.age++;
  }
}
