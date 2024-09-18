import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Course } from "../model/course";

import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
})
export class CourseCardComponent implements OnInit {
  ngOnInit() {
    this.routes.data.subscribe((data) => {
      console.log(data.title);
    });
  }

  constructor(private routes: ActivatedRoute) {}

  @Input({
    required: true,
  })
  course: Course;

  @Input({
    required: true,
  })
  index: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  onCourseViewed() {
    console.log("Card Component button clicked ...");

    this.courseSelected.emit(this.course);
  }

  cardClasses() {
    let classes = ["course-card"];
    if (this.course.category === "BEGINNER") {
      return [...classes, "beginner"];
    }
    return classes;
  }
}
