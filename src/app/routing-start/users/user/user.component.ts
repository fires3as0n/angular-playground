import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number, name: string };
  customId: '';
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    /*
    * Observable. Similar to react State but more
    * flexible, because behavior can be configured
    * used to update component info and presentation whenever link changes if component
    * is already loaded
    * (if component is reloaded within itself)
     */
    this.paramsSubscription = this.route.params.subscribe(
      /*
      * First argument is a callback executed whenever observable changes
      * @params - new parameters received
       */
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }

  /*
  * Cancel subscription
  * Don't need to do this, because angular will handle it himself (for route observables)
  * but a good way to know on how this works, in order to handle
  * custom observables
   */
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

}
