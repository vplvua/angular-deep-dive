import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  input,
  Output,
} from "@angular/core";

@Directive({
  selector: "[highlighted]",
  exportAs: "hl",
})
export class HighlightedDirective {
  @Input() highlighted: boolean = false;

  @Output()
  highlightedChange = new EventEmitter<boolean>();

  constructor() {
    console.log("Directive created");
  }

  // @HostBinding("className")
  // get cssClasses() {
  //   return "highlighted";
  // }

  // @HostBinding("class.highlighted")
  // get cssClasses() {
  //   return true;
  // }

  @HostBinding("class.highlighted")
  get cssClasses() {
    return this.highlighted;
  }

  @HostListener("mouseover")
  onMouseEnter() {
    this.highlighted = true;

    this.highlightedChange.emit(this.highlighted);
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.highlighted = false;

    this.highlightedChange.emit(this.highlighted);
  }

  toggle() {
    this.highlighted = !this.highlighted;

    this.highlightedChange.emit(this.highlighted);
  }
}
