import { Routes, RouterModule } from "@angular/router";
import { CourseCardComponent } from "./course-card/course-card.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "course",
    component: CourseCardComponent,
    data: { title: "Course 1" },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
