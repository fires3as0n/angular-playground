import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {UserModel} from './user.model';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class DefaultComponent implements OnInit {
  @Input() public inputUser: UserModel;

  public componentUser: UserModel = {
    name: 'default',
    age: 11
  };

  constructor() { }

  ngOnInit(): void {
  }

  mutateUser() {
    this.componentUser.name = "name mutated"
  }

  reassignUser() {
    this.componentUser = {
      name: 'reasigned user name',
      age: 0
    }
  }
}
