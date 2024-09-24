import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  viewChild,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseCardComponent } from "./course-card/course-card.component";
import { HighlightedDirective } from "./directives/highlighted.directive";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {
  courses = COURSES;

  @ViewChildren(CourseCardComponent, { read: ElementRef })
  cards: QueryList<ElementRef>;

  // @ViewChild(HighlightedDirective)
  // highlighted: HighlightedDirective;
  @ViewChild(CourseCardComponent, { read: ElementRef })
  card: ElementRef;

  constructor() {}

  ngAfterViewInit() {}

  onCourseSelected($event: Course) {
    console.log("App component - course selected: ", $event);
  }
}
