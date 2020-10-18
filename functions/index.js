const functions = require('firebase-functions');
const admin = require('firebase-admin');

let serviceAccount = require("./admin.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://hacknc-2020.firebaseio.com"
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.cidName = functions.https.onRequest((request, response) => {
    let file = fs.readFile('./conditions')
    console.log(file);
});
