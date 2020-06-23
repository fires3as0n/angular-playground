import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Subscription} from 'rxjs';
import {PartialObserver} from "rxjs/internal/types";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  /* Subscribtion*/
  private subOne: Subscription;
  private pipedObs;
  private pipedObsSbscr: Subscription;

  constructor() { }

  ngOnInit() {
    /*
    * Observable built in to rxjs
     */
    // this.subOne = interval(1000).subscribe(count => {
    //   console.log(count);
    // })

    /*
    * Custom Observable
    *
    * In GG lections arguemnt to Observable constructor
    * (actually he uses legacy Observable.create() there)
    * is called observer, not subscriber
    * but in type, and in official documentation it is called subscriber
     */
    const customInterval = new Observable((subscriber) => {
      let count = 0;
      setInterval(() => {
        subscriber.next(count++); // emits a new value

        if (count > 3) {
          // subscriber.error(new Error('observable error faked'));  // emits an error
        }

        if (count > 4) {
          subscriber.complete(); // completes subscriber. no arguments
        }
      }, 300)
    });



/*    this.subOne = customInterval.subscribe( /!* Subscriber *!/
      count => {
        console.log(count);
      },

      error => {
        console.warn(error.message);
      },

      () => {
        console.log('observable completed');
      }
    );*/

    /*
    * Operators
     */
    this.pipedObs = customInterval.pipe(map((data) => {
      return 'Counter: ' + data;
    }));

   this.pipedObsSbscr = this.pipedObs.subscribe(
     count => console.log(count)
   )

    /*
    * Subject
     */
  }

  ngOnDestroy(): void {
    // this.subOne.unsubscribe();
    // this.pipedObsSbscr.unsubscribe();
  }

}
