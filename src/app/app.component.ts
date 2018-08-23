import { MdcAppBar } from "@angular-mdc/web";
import { Component, Renderer2, ViewChild } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  // prettier-ignore
  @ViewChild("appbar") appbar: MdcAppBar;

  public pageTitle: String;

  constructor(private router: Router, private renderer: Renderer2) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.pageTitle = event.url.slice(1);
        return;
      }
    });
  }
}
