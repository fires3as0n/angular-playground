import {Component, Input, OnInit} from '@angular/core';
import {UserStatusService} from "../services/user-status.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  @Input() users: string[];

  constructor(private userStatusService: UserStatusService) {}

  onSetToInactive(id: number) {
    this.userStatusService.setToInactive(id);
  }

  ngOnInit(): void {
    this.users = this.userStatusService.activeUsers;
  }
}
