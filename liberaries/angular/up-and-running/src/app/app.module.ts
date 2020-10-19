import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import UserService from "./service/user.service";

@NgModule({
  declarations: [AppComponent, UserComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
