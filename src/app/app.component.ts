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

function coursesServiceProvider(http: HttpClient): CoursesService {
  return new CoursesService(http);
}

export const COURSES_SERVICES = new InjectionToken<CoursesService>(
  "COURSES_SERVICES"
);

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [
    {
      provide: COURSES_SERVICES,
      useFactory: coursesServiceProvider,
      deps: [HttpClient],
    },
  ],
})
export class AppComponent implements OnInit {
  courses$: Observable<Course[]>;

  constructor(
    @Inject(COURSES_SERVICES) private coursesService: CoursesService
  ) {}

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
