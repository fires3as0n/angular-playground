import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-ng-template-ng-container',
  templateUrl: './ng-template-ng-container.component.html',
  styleUrls: ['./ng-template-ng-container.component.css']
})
export class NgTemplateNgContainerComponent {
  public lessons = ['Lesson 1', 'Lessons 2'];
  public  ctx = {estimate: 12};

  public onAddLesson(addLessonForm: NgForm) {
    this.lessons.push(addLessonForm.value.lesson);
  }

  onRemoveLesson() {
    this.lessons.pop();
  }


}
