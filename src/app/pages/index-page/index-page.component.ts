import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "index-page",
  templateUrl: "./index-page.component.html",
  styleUrls: ["./index-page.component.css"],
})
export class IndexPage {
  constructor(private title: Title) {
    this.title.setTitle("TEDxCairoUniversity | Official Website");
  }
}
