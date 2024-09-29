import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "../model/course";

let counter = 0;

@Injectable({
  providedIn: "root",
  // useClass: CoursesService,
  useFactory: (http: HttpClient) => {
    return new CoursesService(http);
  },
  deps: [HttpClient],
})
export class CoursesService {
  id: number;

  constructor(private http: HttpClient) {
    counter++;

    this.id = counter;

    console.log("Creating new CoursesService " + this.id);
  }

  loadCourses(): Observable<Course[]> {
    const params = new HttpParams().set("page", "1").set("pageSize", "10");

    return this.http.get<Course[]>("/api/courses", { params });
  }

  saveCourse(course): Observable<Course> {
    const headers = new HttpHeaders().set("X-Auth", "userId");

    return this.http.put<Course>(`/api/courses/${course.id}`, course, {
      headers,
    });
  }
}
