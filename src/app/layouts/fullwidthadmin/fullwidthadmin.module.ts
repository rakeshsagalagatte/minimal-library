import { NgModule } from "@angular/core";
import { FullwidthadminComponent } from "./fullwidthadmin.component";
import { AdminComponent } from "../../genadmin/admin/admin.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { GensharedModule } from "../../genshared/genshared.module";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
      FullwidthadminComponent,
      AdminComponent,
    ],
    imports: [
      CommonModule,
      RouterModule,
      GensharedModule,
      FormsModule,
      HttpClientModule,
      
  
  
    ],
    exports: [
      FullwidthadminComponent,
      AdminComponent,
      
    ]
  })
  export class FullwidthadminModule { }