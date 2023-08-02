import firebase from 'firebase'

const firebaseConfig = {
	apiKey: "AIzaSyAezK4UDmTZIQQURCL_aVpObixKR8LmY8g",
	authDomain: "infininet-ef987.firebaseapp.com",
	projectId: "infininet-ef987",
	storageBucket: "infininet-ef987.appspot.com",
	messagingSenderId: "389127107829",
	appId: "1:389127107829:web:e530900ec967ae159f81bc"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { auth, provider, storage }
export default db