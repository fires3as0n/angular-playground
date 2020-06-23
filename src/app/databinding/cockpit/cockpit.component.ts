import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  constructor() {}

  @Output() serverCreated = new EventEmitter<{
    serverName: string,
    serverContent: string
  }>();
  @Output('blueprintAlias') blueprintCreated = new EventEmitter<{
    blueprintName: string,
    blueprintContent: string
  }>();
  newServerName = '';
  newServerContent = '';

  /*
  * The purpose of {static: true/false} is not yet known and should be investigated
  * as for now it looks like it works even without it
   */
  @ViewChild('serverNameInput', {static: true}) serverNameInput: ElementRef;

  onAddServer(inputValue) {
    this.serverCreated.emit({serverName: inputValue.value, serverContent: this.newServerContent});
    console.log(inputValue);
    console.log(this.serverNameInput);
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({blueprintName: this.newServerName, blueprintContent: this.newServerContent});
  }

  ngOnInit(): void {
  }

}
