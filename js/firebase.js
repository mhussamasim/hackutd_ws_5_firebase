import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// ####################################################################
// ||                                                                ||
// ||                      Firebase Goes Below                       ||
// ||                                                                ||
// ####################################################################
const firebaseConfig = {
  apiKey: "AIzaSyA7zTcGrhy2jx5J-U09j-ZdOHjPoNqhEds",
  authDomain: "hackutd-firebase-project.firebaseapp.com",
  projectId: "hackutd-firebase-project",
  storageBucket: "hackutd-firebase-project.appspot.com",
  messagingSenderId: "7554712670",
  appId: "1:7554712670:web:c8c28af09ea670898260cf",
  measurementId: "G-CP28QK7YFH"
};
// ####################################################################
// ||                                                                ||
// ||                      Firebase Goes Above                       ||
// ||                                                                ||
// ####################################################################
let db = null;
try {
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
} catch {
  console.error('Failed to initialize Firebase.');
}

export default db;
