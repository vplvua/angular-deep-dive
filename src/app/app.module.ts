import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";
import { CoursesModule } from "./courses/courses.module";

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, CoursesModule],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule {}
