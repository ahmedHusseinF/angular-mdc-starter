import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// index page
import { IndexPage } from "./pages/index-page/index-page.component";

export const routes: Routes = [
  {
    path: "home",
    component: IndexPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
