import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCd0YcS7dF4UwJxSoolpylhfnbSSEBRwvE',
  authDomain: 'story-apps-5ec7b.firebaseapp.com',
  projectId: 'story-apps-5ec7b',
  storageBucket: 'story-apps-5ec7b.appspot.com',
  messagingSenderId: '99951609191',
  appId: '1:99951609191:web:bdf3c67263223e40d79bc2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export {
  app, auth, db, storage,
};
