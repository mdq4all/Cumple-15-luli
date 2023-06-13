   // Import the functions you need from the SDKs you need
   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
   import { getDatabase, ref, child, get, push, set } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
   // TODO: Add SDKs for Firebase products that you want to use
   // https://firebase.google.com/docs/web/setup#available-libraries
 
   // Your web app's Firebase configuration
   const firebaseConfig = {
     apiKey: "AIzaSyAYMQo1OcLma_xMDICHkYPb5pGkHHqq3ks",
     authDomain: "luli15.firebaseapp.com",
     databaseURL: "https://luli15-default-rtdb.firebaseio.com",
     projectId: "luli15",
     storageBucket: "luli15.appspot.com",
     messagingSenderId: "381508612345",
     appId: "1:381508612345:web:404a8c21cfe76a58d2b228"
   };
 
   // Initialize Firebase
   const app = initializeApp(firebaseConfig);

export function readFS (endpoint) {
  return new Promise((resolve, reject) => {

    const dbRef = ref(getDatabase());
    const dataRef = child(dbRef, endpoint);

    get(dataRef)
      .then((snapshot) => {
        const arrayData = [];
        snapshot.forEach((childSnapshot) => {
          const data = childSnapshot.val();
          arrayData.push(data);
        });
        console.log(arrayData);
        resolve(arrayData);
      })
      .catch((error) => {
        console.error(error, "error obteniendo datos de Firebase");
        reject(error);
      });
  });
};

export function addData(data, endpoint) {
  
  return new Promise((resolve, reject) => {
    const dbRef = ref(getDatabase());
    const dataRef = child(dbRef, endpoint)
    const newObjectRef = push(dataRef);
    
    set(newObjectRef, data)
      .then(() => {
        console.log("Nuevo objeto creado correctamente");
        resolve();
      })
      .catch((error) => {
        console.error("Error al crear el nuevo objeto:", error);
        reject();
      });
    });
  }
  
 