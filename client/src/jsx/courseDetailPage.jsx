import React, { useEffect } from 'react';
import ReactDOM from "react-dom/client";
import { addContentUrl, getUploadsUrl } from "../logic/api";
import { checkIfLoggedOut } from "../logic/utils";
import { DEHeader, DELargeHeader } from "./components";
import { downloadFirebaseFile, uploadFileToFirebase } from "../logic/firebase.js";

import "../css/index.css";
import "../css/courseDetailPage.css";
import mascotImage from '../assets/mascot.png';
import noteIcon from '../assets/noteIcon.png';
import addIcon from '../assets/addIcon2.png';
import boardIcon from '../assets/board.png';
function CourseDetailPage() {
    useEffect(() => {
        initPage();
    }, []);
    return (
        <React.StrictMode>
            <DEHeader imgSrc={mascotImage}></DEHeader>
            <div id="body">
                <DELargeHeader id="courseNameTitle"></DELargeHeader>
                <h2 className="mediumTitle"> About Course</h2>
                <div id="aboutCourseFrame">
                    <p id="aboutCourse"></p>
                </div>
                <h2 className="mediumTitle"> Interactive Canvas</h2>
                <div id="interactiveCanvasDiv" onClick={navToCanvas}>
                    <img class="iconImage" src={boardIcon}></img>
                    <p id="uploadNewTitle">Go To Canvas</p>
                </div>
                <h2 className="mediumTitle"> Uploads</h2>
                <div id="uploadsFrame">
                </div>
                <div id="uploadNew" onClick={uploadFile}>
                    <img class="iconImage" src={addIcon}></img>
                    <p id="uploadNewTitle">Upload New Item</p>
                </div>
            </div>
        </React.StrictMode>
    );
}
ReactDOM.createRoot(document.getElementById("root")).render(<CourseDetailPage />);

document.addEventListener('DOMContentLoaded', (event) => {
    checkIfLoggedOut();
});

//initialize Window
function initPage() {
    const storedData = JSON.parse(sessionStorage.getItem('currentCourseData'));
    courseNameTitle.innerHTML = storedData.courseName;
    aboutCourse.innerHTML = storedData.description;
    createContents(storedData.courseNumber);
}

function uploadFile() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.style.display = 'none';

    fileInput.addEventListener('change', prepareFile);
    document.body.appendChild(fileInput);
    fileInput.click();

    function prepareFile(event) {
        const file = event.target.files[0];
        const storedData = JSON.parse(sessionStorage.getItem('currentCourseData'));
        if (file) {
            uploadFileToFirebase(file); //Upload file to firebase
            addContentUrl(storedData.courseNumber, 'uploads/' + file.name);
        } else {
            console.error('No file selected.');
        }
        event.target.remove();
        createContents(storedData.courseNumber);
    }
}

function navToCanvas(){
    window.location.href = "canvasPage.html"; 
}

//create html upload card
function createUploadCard(index, titleText) {
    const div = document.createElement('div');
    div.className = 'uploadCard';
    div.id = titleText;
    div.addEventListener('click', downloadUrl);

    const img = document.createElement('img');
    img.className='iconImage';
    img.src = noteIcon;
    

    const p = document.createElement('p');
    p.className = 'uploadTitle';
    p.textContent = 'Upload' + index;

    div.appendChild(img);
    div.appendChild(p);

    return div;
}
//Call firebase to download the URL
async function downloadUrl() {
    console.log(this.id);
    await downloadFirebaseFile(this.id);
}
//Dynamically create the Uploaded Contents
async function createContents(courseNumber) {
    uploadsFrame.innerHTML = '';
    const uploadsUrl = await getUploadsUrl(courseNumber);
    var index = 1;
    uploadsUrl.forEach((uploadsUrl) => {
        const uploadCard = createUploadCard(index, uploadsUrl);
        uploadsFrame.appendChild(uploadCard);
        index = index + 1;
    });
}
