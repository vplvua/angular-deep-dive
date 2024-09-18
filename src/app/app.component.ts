import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseCardComponent } from "./course-card/course-card.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  courses = COURSES;

  @ViewChild("cardRefs")
  courseComponent: CourseCardComponent;

  @ViewChild("container")
  containerRef: ElementRef;

  @ViewChildren(CourseCardComponent)
  coursesRefs: QueryList<CourseCardComponent>;

  constructor() {}

  ngAfterViewInit() {
    this.coursesRefs.changes.subscribe((data) => {
      console.log("cards ", data);
    });

    console.log("App Component - CoursesRefs: ", this.coursesRefs);
  }

  onCourseSelected(course: Course) {
    console.log("App Component - Course Clicked: ", course.description);
    console.log("App Component - Course Component: ", this.courseComponent);
    console.log("App Component - Container: ", this.containerRef);
  }

  loadCourses() {
    this.courses.push({
      id: this.courses.length + 1,
      description: "Angular Core Deep Dive",
      iconUrl:
        "https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png",
      longDescription:
        "A detailed walk-through of the most important part of Angular - the Core and Common modules",
      category: "ADVANCED",
      lessonsCount: 10,
    });
  }
}
