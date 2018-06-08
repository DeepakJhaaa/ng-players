import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AboutComponent } from "./about.component";
import { routing } from "./about.router";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [CommonModule, SharedModule, routing],
  declarations: [AboutComponent],
  bootstrap: [AboutComponent]
})
export class AboutModule {}
