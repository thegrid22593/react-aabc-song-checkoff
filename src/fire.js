import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAYThpdcu3zb4ll_q6BJkpaWYS8XTVVz4Y",
    authDomain: "aabc-checkoff.firebaseapp.com",
    databaseURL: "https://aabc-checkoff.firebaseio.com",
    projectId: "aabc-checkoff",
    storageBucket: "aabc-checkoff.appspot.com",
    messagingSenderId: "920421563150"
};

var fire = firebase.initializeApp(config);

export default fire;