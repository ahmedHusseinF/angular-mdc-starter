import { NgModule } from "@angular/core";
import {
  MdcButtonModule,
  MdcDrawerModule,
  MdcIconModule,
  MdcAppBarModule,
  MdcListModule,
  MdcElevationModule,
} from "@angular-mdc/web";

@NgModule({
  exports: [
    MdcButtonModule,
    MdcDrawerModule,
    MdcIconModule,
    MdcAppBarModule,
    MdcListModule,
    MdcElevationModule,
  ],
})
export class AppMaterialModule {}
