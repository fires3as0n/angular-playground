import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-directives',
  templateUrl: './custom-directives.component.html',
  styleUrls: ['./custom-directives.component.css']
})
export class CustomDirectivesComponent {
  public counter = 0;
  incrementCounter() { this.counter++ }
  decrementCounter() { this.counter-- }
}
