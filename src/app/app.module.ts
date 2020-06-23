import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {ServerComponent} from './server/server.component';
import {ServersComponent} from './servers/servers.component';
import {DatabindingComponent} from './databinding/databinding.component';
import {CockpitComponent} from './databinding/cockpit/cockpit.component';
import {ServerElementComponent} from './databinding/server-element/server-element.component';
import {DatabindingAssignmentComponent} from './assignments/databinding-assignment/databinding-assignment.component';
import {GameControlComponent} from './assignments/databinding-assignment/game-control/game-control.component';
import {OddComponent} from './assignments/databinding-assignment/odd/odd.component';
import {EvenComponent} from './assignments/databinding-assignment/even/even.component';
import {ServicesComponent} from './services/services.component';
import {AccountComponent} from "./services/account/account.component";
import {NewAccountComponent} from "./services/new-account/new-account.component";
import {AccountService} from "./services/account/shared/account.service";
import {LoggingService} from "./services/account/shared/logging.service";
import {ActiveUsersComponent} from "./services-assignment/active-users/active-users.component";
import {InactiveUsersComponent} from "./services-assignment/inactive-users/inactive-users.component";
import {ServicesAssignmentComponent} from "./services-assignment/services-assignment.component";
import {CounterService} from "./services-assignment/services/counter.service";
import {RoutingStartComponent} from "./routing-start/routing-start.component";
import {HomeComponent} from "./routing-start/home/home.component";
import {UsersComponent} from "./routing-start/users/users.component";
import {UserComponent} from "./routing-start/users/user/user.component";
import {EditServerComponent} from "./routing-start/servers/edit-server/edit-server.component";
import {ServersService} from "./routing-start/servers/servers.service";
import {ServerTwoComponent} from "./routing-start/servers/server/server.component";
import {ServersTwoComponent} from "./routing-start/servers/servers.component";
import {PageNotFoundComponent} from './routing-start/page-not-found/page-not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import {AuthService} from "./routing-start/auth.service";
import {AuthGuardService} from "./auth-guard.service";
import {CanDeactivateGuardService} from "./routing-start/servers/edit-server/can-deactivate-guard.service";
import {ServerResolverService} from "./routing-start/servers/server/server-resolver.service";
import { FormsTdStartModule} from "./forms-td-start/forms-td-start.module";
import {FormsReactiveStartModule} from "./forms-reactive-start/forms-reactive-start.module";
import { AssignmentsComponent } from './assignments/assignments.component';
import {AssignmentsModule} from "./assignments/assignments.module";
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import {CustomDirectivesModule} from "./custom-directives/custom-directives.module";
import { CrossComponentCommunicationComponent } from './cross-component-communication/cross-component-communication.component';
import {ShoppingListModule} from "./cross-component-communication/cross-component-communication.module";
import {PipesModule} from './pipes/pipes.module';
import {HttpModule} from './http/http.module';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ChangeDetectionModule } from './change-detection/change-detection.module';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    DatabindingComponent,
    CockpitComponent,
    ServerElementComponent,
    DatabindingAssignmentComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    ServicesComponent,
    AppComponent,
    AccountComponent,
    NewAccountComponent,
    ServicesAssignmentComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    RoutingStartComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    ServerTwoComponent,
    ServersTwoComponent,
    PageNotFoundComponent,
    AssignmentsComponent,
    CustomDirectivesComponent,
    CrossComponentCommunicationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FormsTdStartModule,
    FormsReactiveStartModule,
    AssignmentsModule,
    CustomDirectivesModule,
    ShoppingListModule,
    PipesModule,
    HttpModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    ChangeDetectionModule
  ],
  providers: [
    AccountService, // to use it in the whole routing-start and other services as well
    LoggingService,
    CounterService, //services-assignment
    ServersService,
    AuthService,
    AuthGuardService,
    CanDeactivateGuardService,
    ServerResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
