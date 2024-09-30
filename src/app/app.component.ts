import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  Inject,
  InjectionToken,
  OnInit,
  Optional,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { Course } from "./model/course";
import { CourseCardComponent } from "./course-card/course-card.component";
import { HighlightedDirective } from "./directives/highlighted.directive";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { CoursesService } from "./services/courses.service";
import { APP_CONFIG, APP_CONFIG_TOKEN, AppConfig } from "./config";
import { COURSES } from "src/db-data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, DoCheck {
  courses: Course[];

  loaded = false;

  constructor(
    private coursesService: CoursesService,
    private cd: ChangeDetectorRef
  ) {}

  ngDoCheck(): void {
    console.log("AppComponent - DoCheck");
    if (this.loaded) {
      console.log("AppComponent - DoCheck - courses found");
      this.cd.markForCheck();
      this.loaded = undefined;
    }
  }

  ngOnInit() {
    this.coursesService.loadCourses().subscribe((courses) => {
      this.courses = courses;
      this.loaded = true;
    });
  }

  onEditCourse() {}

  save(course: Course) {
    this.coursesService.saveCourse(course).subscribe(
      () => {
        console.log("Course saved!");
      },
      (err) => {
        console.log("Error saving course", err);
      }
    );
  }
}
