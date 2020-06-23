import {Injectable} from "@angular/core";

//@Injectable() // technically not required but recommended to add in new Angular versions
export class LoggingService {
  logStatusChange(status)   {
    console.log('A server status changed, new status: ' + status);
  }
}
