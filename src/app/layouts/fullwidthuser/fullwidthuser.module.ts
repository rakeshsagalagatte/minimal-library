import { NgModule } from "@angular/core";
import { FullwidthuserComponent } from "./fullwidthuser.component";
import { UserComponent } from "../../genuser/user/user.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { GensharedModule } from "../../genshared/genshared.module";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
      FullwidthuserComponent,
      UserComponent
    ],
    imports: [
      CommonModule,
      RouterModule,
      GensharedModule,
      FormsModule,
      HttpClientModule
    ],
    exports: [
      FullwidthuserComponent,
      UserComponent
    ]
  })
  export class FullwidthuserModule { }
  