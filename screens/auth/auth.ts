import { FirebaseAuth } from "@firebase/auth-types";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut } from "firebase/auth";
import {auth_db} from "../../firebase"

export function signIn(email: string, password: string) {

  return signInWithEmailAndPassword(auth_db, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    const uid = user.uid;
    console.log("user : "+JSON.stringify(user)+ " uid : "+uid)
return uid;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

export function signUp(email: string, password: string) {
  return createUserWithEmailAndPassword(auth_db,email, password).then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

//export function subscribeAuth(callback: auth.Auth | FirebaseAuth) {
  //return auth.onAuthStateChanged(callback,auth_db);
//}

export function signOut_() {
  return signOut(auth_db);
}