/*
THIS FILE CONTAINS ALL THE FUNCTIONS PERTAINING TO FIREBASE STORAGE
*/
import { initializeApp } from "firebase/app";
import { ref, uploadBytesResumable, getDownloadURL, getStorage } from 'firebase/storage';
import { getDatabase, push, ref as databaseRef } from 'firebase/database';
import { getFirestore } from "firebase/firestore";

// Firebase configuration
// Mean't to be private
// But I could not think of a way to share my file without disclosing this
const firebaseConfig = {
    apiKey: "AIzaSyAcbJYY5cCHWPyf1u62eq-UIpbrMtWLaEE",
    authDomain: "cs490ap.firebaseapp.com",
    databaseURL: "https://cs490ap-default-rtdb.firebaseio.com",
    projectId: "cs490ap",
    storageBucket: "cs490ap.appspot.com",
    messagingSenderId: "216777373794",
    appId: "1:216777373794:web:f3eea8a98ea038fb79393b",
    measurementId: "G-SGN59VKKS6"
};

// init Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);


function returnFirestore() {
    const db = getFirestore(app);
    return db;
}

//Upload file to firebase
async function uploadFileToFirebase(file) {
    if (file) {
        const storageRef = ref(storage, 'uploads/' + file.name);
        const metadata = {
            contentType: file.type,
        };
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    }
}

//Downloads the file from firebase
async function downloadFirebaseFile(filePath) {
    const storageRef = ref(storage, filePath);
    const downloadUrl = await getDownloadURL(storageRef);

    console.log(downloadUrl);
    const response = await fetch(downloadUrl);
    const blob = await response.blob();

    // Create a link element to download the file
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filePath.split('/').pop();
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
}
function initDb(courseName) {
    const db = getDatabase(app);
    const path = `/canvas/${courseName}/stroke`;
    const dbRef = databaseRef(db, path);
    return dbRef;
}
function updateValue(value, courseName) {
    const dbRef = initDb(courseName);
    push(dbRef, value)
        .then(() => console.log("Value updated successfully"))
        .catch((err) => console.error(err));
}


export { uploadFileToFirebase, downloadFirebaseFile, initDb, updateValue, returnFirestore };    