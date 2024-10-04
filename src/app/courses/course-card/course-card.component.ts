import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  DoCheck,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  QueryList,
  Self,
  SkipSelf,
  ViewEncapsulation,
} from "@angular/core";
import { Course } from "../../model/course";
import { CourseImageComponent } from "../course-image/course-image.component";
import { CoursesService } from "../courses.service";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardComponent
  implements
    OnInit,
    OnDestroy,
    OnChanges,
    AfterContentChecked,
    AfterViewChecked,
    AfterContentInit,
    AfterViewInit,
    DoCheck
{
  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output("courseChanged")
  courseEmitter = new EventEmitter<Course>();

  constructor(
    private coursesService: CoursesService,
    @Attribute("type") private type: string,
    private cd: ChangeDetectorRef
  ) {
    console.log("constructor");
  }

  ngOnInit() {
    console.log("ngOnInit");
  }

  ngOnChanges(changes) {
    console.log("ngOnChanges", changes);
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");

    this.course.category = "ADVANCED";

    // this.course.iconUrl = "";
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
  }

  onTitleChanged(newTitle: string) {
    this.course.description = newTitle;
  }

  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course, description });
  }

  ngOnDestroy() {
    console.log("ngOnChanges");
  }
}
