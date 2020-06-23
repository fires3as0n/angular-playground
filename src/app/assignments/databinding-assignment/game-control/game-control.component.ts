import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  timer;
  @Output('numberEmitted') emitter = new EventEmitter<number>();
  @Output() gameStop = new EventEmitter();

  onStart() {
    this.timer = setInterval(() => {
      this.emitter.emit(Math.floor(Math.random() * 100));
    }, 1000);
  }

  onStop() {
    clearInterval(this.timer);
    this.gameStop.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
