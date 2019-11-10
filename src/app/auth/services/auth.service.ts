import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {map, tap} from 'rxjs/operators';
import {FlashMessagesService} from "angular2-flash-messages";

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth,
              private flashMessage: FlashMessagesService
  ) {
  }


  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
          err => reject(err));
    });
  }

  register(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
          err => reject(err));
    });
  }

  getAuth() {
    return this.afAuth.authState.pipe(
      map(auth => auth)
    );
  }

  authInfo() {
    return this.afAuth.auth.currentUser.email;
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
