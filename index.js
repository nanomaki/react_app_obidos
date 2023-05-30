 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
 import { getDatabase, ref, set, get, child } 
 from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyCtMEdX5OotGlmuC9B0QO1jMqj0T0chCmY",
   authDomain: "my-app-79d61.firebaseapp.com",
   databaseURL: "https://my-app-79d61-default-rtdb.firebaseio.com",
   projectId: "my-app-79d61",
   storageBucket: "my-app-79d61.appspot.com",
   messagingSenderId: "1006411927866",
   appId: "1:1006411927866:web:810c92e059b0a3dc41c003"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 // Get a reference to the database service
 const db = getDatabase(app);

  
 document.getElementById('formnote').addEventListener('submit', function(e) {
   e.preventDefault();
   const Noteid=Math.random().toString(36).slice(2, 7);
   set(ref(db, 'notes/' + Noteid ), {
       Noteid: Noteid,  
       title: document.getElementById('title').value,
       note: document.getElementById('note').value,
   });

   alert('Note added successfully');
   document.getElementById('formnote').reset();

 });
