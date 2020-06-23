import {Component, OnInit} from '@angular/core';
import {UserStatusService} from "./services/user-status.service";
import {CounterService} from "./services/counter.service";

@Component({
  selector: 'services-assignment',
  templateUrl: './services-assignment.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserStatusService]
})
export class ServicesAssignmentComponent implements OnInit {
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];

  constructor(
    private userStatusService: UserStatusService,
    public counterService: CounterService
  ) {}

  ngOnInit(): void {
    this.activeUsers = this.userStatusService.activeUsers;
    this.inactiveUsers = this.userStatusService.inactiveUsers;
  }
}
