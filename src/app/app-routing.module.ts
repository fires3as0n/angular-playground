import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./routing-start/users/users.component";
import {UserComponent} from "./routing-start/users/user/user.component";
import {ServersTwoComponent} from "./routing-start/servers/servers.component";
import {ServerTwoComponent} from "./routing-start/servers/server/server.component";
import {EditServerComponent} from "./routing-start/servers/edit-server/edit-server.component";
import {PageNotFoundComponent} from "./routing-start/page-not-found/page-not-found.component";
import {AuthGuardService} from "./auth-guard.service";
import {CanDeactivateGuardService} from "./routing-start/servers/edit-server/can-deactivate-guard.service";
import {ServerResolverService} from "./routing-start/servers/server/server-resolver.service";
import {ObservablesModule} from "./observables/observables.module";
import {ObservablesComponent} from "./observables/observables.component";
import {observablesRoutes, ObservablesRoutingModule} from "./observables/observables-routing.module";
import {FormsTdStartComponent} from "./forms-td-start/forms-td-start.component";
import {FormsReactiveStartComponent} from "./forms-reactive-start/forms-reactive-start.component";
import {AppComponent} from "./app.component";
import {CustomDirectivesComponent} from "./custom-directives/custom-directives.component";
import {CrossComponentCommunicationComponent} from "./cross-component-communication/cross-component-communication.component";
import {AssignmentsComponent} from "./assignments/assignments.component";
import {assignmentsRoutes} from "./assignments/assignments-routing.module";
import {DatabindingComponent} from "./databinding/databinding.component";
import {RoutingStartComponent} from "./routing-start/routing-start.component";
import {ServicesComponent} from './services/services.component';
import {PipesComponent} from './pipes/pipes.component';
import {HttpComponent} from './http/http.component';
import {ChangeDetectionComponent} from './change-detection/change-detection.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'databinding', component: DatabindingComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'custom-directives', component: CustomDirectivesComponent },
  { path: 'cross-component-communication', component: CrossComponentCommunicationComponent },
  { path: 'observables', component: ObservablesComponent, children: observablesRoutes },
  { path: 'forms-template', component: FormsTdStartComponent },
  { path: 'forms-reactive', component: FormsReactiveStartComponent },

  {
    path: 'routing-start',
    component: RoutingStartComponent,
    children: [
      {
        path: 'users',
        component:
        UsersComponent,
        children: [
          { path: ':id/:name', component: UserComponent },
        ]
      },
      {
        path: 'servers',
        component: ServersTwoComponent,
        children: [
          {
            path: ':id',
            component: ServerTwoComponent,
            canActivate: [AuthGuardService],
            resolve: { server: ServerResolverService }
          },
          {
            path: ':id/edit',
            component: EditServerComponent,
            canActivate: [AuthGuardService],
            canDeactivate: [CanDeactivateGuardService]
          },
        ]
      },
    ]
  },
  { path: 'pipes', component: PipesComponent },
  { path: 'http', component: HttpComponent },
  { path: 'change-detection', component: ChangeDetectionComponent },
  { path: 'assignments', component: AssignmentsComponent, children: assignmentsRoutes },
  { path: '**', component: PageNotFoundComponent, data: { message: 'Page not found' } },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
