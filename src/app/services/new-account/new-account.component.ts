import {Component} from '@angular/core';
import {LoggingService} from "../account/shared/logging.service";
import {AccountService} from "../account/shared/account.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {

  constructor(
    private loggingService: LoggingService,
    private accountService: AccountService
  ) {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus);
    this.accountService.statusUpdated.emit(
      `Emmitted by accountService from ${this.constructor.name} - Status: ${accountStatus}`
    )
  }
}
