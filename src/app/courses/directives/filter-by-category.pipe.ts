import { Pipe, PipeTransform } from "@angular/core";
import { Course } from "src/app/model/course";

@Pipe({
  name: "filterByCategory",
})
export class FilterByCategoryPipe implements PipeTransform {
  transform(courses: Course[], category: string): Course[] {
    return courses.filter((course) => course.category === category);
  }
}
