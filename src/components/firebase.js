import firebase from "firebase";
const firebaseConfig = {
	apiKey: "AIzaSyAzgaAgyVJmj_IWoOzJvDyDSkh_lQyLpwM",
	authDomain: "reduxtodoapp-c51d7.firebaseapp.com",
	databaseURL: "https://reduxtodoapp-c51d7.firebaseio.com",
	projectId: "reduxtodoapp-c51d7",
	storageBucket: "reduxtodoapp-c51d7.appspot.com",
	messagingSenderId: "1040372033611",
	appId: "1:1040372033611:web:1aaa45eedf7622d2c645ce"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
