import {Component} from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-root', // can use almost any css selector (not id)
  //selector: '[databinding-root]', component then can be <div databinding-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: ['.navigation { padding: 10px; }']
})
export class AppComponent {
  title = 'first-angular-databinding';
  class = 'gay-databinding';

  url: string;

  constructor(
    private location: Location
  ) {}

  ngOnInit() {
    this.location.onUrlChange(url => this.url = url)
  }
}

