const functions = require('firebase-functions');
const admin = require('firebase-admin');

let serviceAccount = require("./admin.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://hacknc-2020.firebaseio.com"
});

const db = admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.newPerson = functions.https.onRequest(async (request, response) => {
  const body = request.body;
  console.log(body)
  const personRef = db.collection('People').doc();
  console.log(body.uid)
  const res = await personRef.set({
    uid: body.uid,
    fname: body.fname,
    lname: body.lname,
    parents: body.parents,
    children: body.children,
    conditions: body.conditions
  })
  response.send(200);
});

exports.getPerson = functions.https.onRequest(async (request, response) => {
  const pid = request.body.pid;
  const pidQuery = await db.collection('People').doc(pid).get()
  const data = pidQuery.data()
  response.send(data.fname + " " + data.lname);
});
