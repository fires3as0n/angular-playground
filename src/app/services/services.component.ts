import {Component, OnInit} from '@angular/core';
import {AccountService} from "./account/shared/account.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [AccountService] //to use in components but not services
})
export class ServicesComponent implements OnInit {
  accounts: {name: string, status: string}[] = [];

  constructor(private accountsService: AccountService) {}

  ngOnInit(): void {
    this.accounts = this.accountsService.accounts;
  }
}
