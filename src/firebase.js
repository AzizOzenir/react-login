import * as  firebase from "firebase/app"
import * as firebaseAuth from 'firebase/auth';


const firebaseConfig = {
};

 const app = firebase.initializeApp(firebaseConfig);
 const auth = firebaseAuth.getAuth(app);

 export { auth};