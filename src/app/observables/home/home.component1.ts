import {Observable, Subscriber, Subscription} from 'rxjs';
import {PartialObserver} from "rxjs/internal/types";

const observable = new Observable((subscriber: Subscriber) => {
  let count = 0;
  setInterval(
    () => {
      subscriber.next(count++);
      subscriber.error(new Error('observable error faked'));
      subscriber.complete();
    },
    300
  )
});

const nextObserver = (next) => {};
const errorObserver = (error) => {};
const completeObserver = () => {};

let subscription: Subscription;
subscription = observable.subscribe(nextObserver, errorObserver, completeObserver);
subscription.unsubscribe();

