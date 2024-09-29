import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  InjectionToken,
  OnInit,
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

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  // providers: [CoursesService],
  // providers: [{ provide: APP_CONFIG_TOKEN, useFactory: () => APP_CONFIG }],
  // providers: [{ provide: APP_CONFIG_TOKEN, useValue: APP_CONFIG }],  not tree shakable
})
export class AppComponent implements OnInit {
  courses$: Observable<Course[]>;

  constructor(
    private coursesService: CoursesService,
    @Inject(APP_CONFIG_TOKEN) private config: AppConfig
  ) {
    console.log(this.config);
  }

  ngOnInit() {
    this.courses$ = this.coursesService.loadCourses();
  }

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
