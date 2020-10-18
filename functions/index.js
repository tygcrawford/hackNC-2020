const functions = require('firebase-functions');
const fs = require('fs');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.cidName = functions.https.onRequest((request, response) => {
    let file = fs.readFile('./conditions')
    console.log(file);
});
