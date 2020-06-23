export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    return new Promise(res => {
      setTimeout(() => res(this.loggedIn), 8);
    });
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
