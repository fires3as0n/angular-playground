import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../default/user.model';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponent implements OnInit {
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
