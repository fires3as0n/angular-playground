import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-server-two',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerTwoComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.server = this.serversService.getServer(this.route.snapshot.params.id);

    /*
    * Get data from service directly incomponent
     */
    // this.route.params.subscribe((params: Params) => {
    //   this.server = this.serversService.getServer(params.id)
    // });

    /*
    * Get data by previously Resolver applied to route
    * will execute retrieving data before component will be loaded
    *
    * Binded in router
    * resolve: {server: ServerResolverService} },
     */

    this.route.data.subscribe((data) => this.server = data.server)
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'})
  }

}
