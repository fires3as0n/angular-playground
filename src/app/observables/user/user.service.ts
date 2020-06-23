import { Subject } from "rxjs";

export class UserService {
  private display = false;
  public shouldDisplay() {
    return this.display;
  }
  public toggleDisplay() {
    this.display = !this.display;
  }
  public activatedEmitter = new Subject<boolean>();
}
