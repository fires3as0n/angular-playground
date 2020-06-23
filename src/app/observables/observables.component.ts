import { Component, OnInit } from '@angular/core';
import {UserService} from "./user/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css'],
  providers: [UserService]
})
export class ObservablesComponent implements OnInit {
  displayViaObservable = false;

  constructor(public userService: UserService) {}

  ngOnInit() {
    this.userService.activatedEmitter.subscribe((a) => {
      this.displayViaObservable = a;
    })
  }
}
