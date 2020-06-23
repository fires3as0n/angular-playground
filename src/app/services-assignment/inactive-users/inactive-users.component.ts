import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserStatusService} from "../services/user-status.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  @Input() users: string[];

  constructor(private userStatusService: UserStatusService) {}

  onSetToActive(id: number) {
    this.userStatusService.setToActive(id);
  }

  ngOnInit(): void {
    this.users = this.userStatusService.inactiveUsers;
  }
}
