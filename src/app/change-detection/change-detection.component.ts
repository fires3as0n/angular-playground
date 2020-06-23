import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserModel} from './components/default/user.model';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css']
})
export class ChangeDetectionComponent {
  public user:UserModel = {
    name: 'default',
    age: 666
  };

  onSubmit(form: NgForm) {
    this.user = form.value
  }
}
