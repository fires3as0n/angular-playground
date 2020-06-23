import {Component, OnInit} from '@angular/core';
import { Location } from "@angular/common";
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-routing-start',
  templateUrl: './routing-start.component.html',
  styleUrls: ['./routing-start.component.css']
})
export class RoutingStartComponent implements OnInit {
  url: string;

  constructor(
    private location: Location,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.location.onUrlChange(url => this.url = url)
  }

  login() {
    this.authService.login();
  }

}
