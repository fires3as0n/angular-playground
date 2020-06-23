import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {ServersService} from "../servers.service";
import {Injectable} from "@angular/core";

interface Server {
  id: number;
  name: string;
  status: string
}

@Injectable()
export class ServerResolverService implements Resolve<Server> {
  constructor(private serversService: ServersService) {}

  /*
  * if this service is applied as a
  * resolve: {server: ServerResolverService}
  * in router, this method will be called to get that data that is mapped to
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<Server> | Promise<Server> | Server
  {
    return this.serversService.getServer(route.params.id)
  }
}
