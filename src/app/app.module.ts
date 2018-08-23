import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { environment } from "../environments/environment";
//import { AngularFireLite } from "angularfire-lite";

// main app component files
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";

// component files
import { IndexPage } from "./pages/index-page/index-page.component";

// material components
import { AppMaterialModule } from "./material.module";

@NgModule({
  declarations: [AppComponent, IndexPage],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    //AngularFireLite.forRoot(environment.config),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
