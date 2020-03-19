import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Sing } from '../interfaces/sing.interface';
import { Register } from '../interfaces/register.interface';
import { AngularFirestore  } from "@angular/fire/firestore";
import { map } from "rxjs/operators";
import { Perfil } from '../interfaces/perfil.interface';
import { DataP } from '../interfaces/DataP.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth: AngularFireAuth,
    private router: Router,
    private db : AngularFirestore) { }


  getAll(): Observable<DataP[]>{
    return this.db.collection('usuarios').snapshotChanges()
    .pipe(map(actions => actions.map(a => {
      const data = a.payload.doc.data() as DataP;
      const uid = a.payload.doc.id;
      return {uid, ...data};
    })))
  }


  isAuth() {
      return this.AFauth.authState.pipe(map(auth => auth));
  }

  doRegister(register: Register, urlimage) {
    console.log(urlimage);
    
    return new Promise<any>((resolve, reject) => {
      this.AFauth.auth.createUserWithEmailAndPassword(register.emailr,
        register.passwordr)
        .then(
          res => {
            var user = this.AFauth.auth.currentUser;

            user.updateProfile({
              displayName: register.usernamer,
              photoURL: urlimage
            }).then(function () {
              // Update successful.
              
            }).catch(function (error) {
              // An error happened.
            });

            this.db.collection('usuarios').doc(res.user.uid).set({
              email: register.emailr,
              uid: res.user.uid,
              username: register.usernamer,
            })
            resolve(), err => reject(err)
          }
        )
    })
  }

  updateUser(perfil: Perfil){
    var user = this.AFauth.auth.currentUser;

            user.updateProfile({
              displayName: perfil.username,             
              photoURL: perfil.photoUrl
            }).then(function () {
              // Update successful.
              this.router.navigate(['/perfil']);
            }).catch(function (error) {
              // An error happened.
            });

            user.updateEmail(perfil.email).then(function() {
              // Update successful.
              this.router.navigate(['/perfil']);
            }).catch(function(error) {
              // An error happened.
            });
  }

  doLogin(sing: Sing) {
    console.log(sing);
    
    return new Promise<any>((resolve, reject) => {
      this.AFauth.auth.signInWithEmailAndPassword(sing.emails, sing.passwords)
        .then(
          res => resolve(console.log(res)
          ),
          err => reject(err))
    })
  }
  doLogout() {
    return new Promise((resolve, reject) => {
      if (this.AFauth.auth.currentUser) {
        this.AFauth.auth.signOut()
          .then(() => {
            this.AFauth.auth.signOut();
            this.router.navigate(['/home']);
            resolve();
          }).catch((error) => {
            reject();
          });
      }
    })
  }

}
