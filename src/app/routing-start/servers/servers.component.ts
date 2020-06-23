import {Component, OnInit} from '@angular/core';
import {ServersService} from './servers.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-servers-two',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersTwoComponent implements OnInit {
  public servers: { id: number, name: string, status: string }[] = [];

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onToServers() {
    this.router.navigate(['servers'], {relativeTo: this.route})
  }
}
