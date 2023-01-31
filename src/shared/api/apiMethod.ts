import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";

 const auth = getAuth();

export function setUserApi(email:string,password:string) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((r) => console.log(r.user))
    .catch((error) => console.log(error));
}

export function getUserApi(email:string, password:string) {
signInWithEmailAndPassword(auth,email,password)
.then(r=> { console.log(r.user)
} )
}
