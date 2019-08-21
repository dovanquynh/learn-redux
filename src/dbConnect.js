import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBmZUAerHjhvEwbaoHPqpgDfh7JQNuZqGk",
  authDomain: "note-redux.firebaseapp.com",
  databaseURL: "https://note-redux.firebaseio.com",
  projectId: "note-redux",
  storageBucket: "note-redux.appspot.com",
  messagingSenderId: "16296605401"
};

firebase.initializeApp(config);
export const Data = firebase.database().ref('Data');

  // var data = firebase.database().ref('note2/');

  // data.once('value').then(function(snapshot){
  //   console.log(snapshot.val());
  // });

  // data.set({
  //   id:3,
  //   title: 'Ngay 25/9',
  //   content: "demo sua du lieu"
  // })