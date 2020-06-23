import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding-assignment',
  templateUrl: './databinding-assignment.component.html',
  styleUrls: ['./databinding-assignment.component.css']
})
export class DatabindingAssignmentComponent implements OnInit {
  evenArray: number[] = [];
  oddArray: number[] = [];

  onNumberEmitted(emmittedNumber: number) {
    emmittedNumber % 2 === 0
      ? this.evenArray.push(emmittedNumber)
      : this.oddArray.push(emmittedNumber);
  }

  onGameStop() {
    this.evenArray = [];
    this.oddArray = [];
  }

  constructor() { }

  ngOnInit(): void {
  }

}
