import React from 'react';
import ReactDOM from "react-dom/client";
import { getCourses, getAllCourses } from "../logic/api";
import { checkIfLoggedOut } from "../logic/utils";
import { DEHeader, DELargeHeader } from "./components";
import "../css/index.css";
import "../css/homePage.css";
import mascotImage from '../assets/mascot.png';
import testImage from '../assets/temp.jpg';
import c1Image from '../assets/c1.jpg';
import c2Image from '../assets/c2.jpg';
import c3Image from '../assets/c3.png';

var courses; //used to store all the courses retrieved 

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <DEHeader imgSrc={mascotImage}></DEHeader>
        <div id="body">
            <DELargeHeader>Your Courses</DELargeHeader>
            <div id="courseCardDiv">
            </div>
        </div>
    </React.StrictMode>
);

document.addEventListener('DOMContentLoaded', (event) => {
    checkIfLoggedOut();
    console.log("username");
    initPage();
});

//run once the page is loaded
async function initPage() {
    console.log("username");
    const username = sessionStorage.getItem('username');
    console.log("username");
    if (username === 'SUPERUSER') {
        const response = await getAllCourses(); //get users courses
        courses = await response.json();
        console.log(courses);
        courseCardDiv.innerHTML = '';
        var index = -1;

        //Dynamically create the Courses
        courses.forEach((course) => {
            index = index + 1;
            const viewCourseCard = createViewCourseCard(index, viewCourse, course.courseName, course.courseNumber + '|| Winter 2024', 'View Course Detail');
            courseCardDiv.appendChild(viewCourseCard);
        });
    }
    else {
        const response = await getCourses(username); //get users courses
        courses = await response.json();

        courseCardDiv.innerHTML = '';
        var index = -1;

        //Dynamically create the Courses
        courses.forEach((course) => {
            index = index + 1;
            const viewCourseCard = createViewCourseCard(index, viewCourse, course.courseName, course.courseNumber + '|| Winter 2024', 'View Course Detail');
            courseCardDiv.appendChild(viewCourseCard);
        });
        courseCardDiv.appendChild(createAddCourseCard()); //add course card to the frame
    }
}
//Create the html component of the ViewCourseCard
function createViewCourseCard(cardId, OnClick, titleText, infoText, hrefText) {
    const div = document.createElement('div');
    div.className = 'ViewCourseCard';
    div.id = cardId;
    div.addEventListener('click', OnClick);

    const img = document.createElement('img');
    img.className = 'ViewCourseImage';
    const images = [testImage, c1Image, c2Image, c3Image];
    img.src = images[cardId % 4];

    const h1 = document.createElement('h1');
    h1.className = 'ViewCourseTitle';
    h1.textContent = titleText;

    const p = document.createElement('p');
    p.className = 'ViewCourseInfo';
    p.textContent = infoText;

    const a = document.createElement('a');
    a.className = 'ViewCourseHref';
    a.textContent = hrefText;

    div.appendChild(img);
    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(a);

    return div;
}
//Create the html component of the addViewCourseCard
function createAddCourseCard() {
    const div = document.createElement('div');
    div.className = 'addCourseDiv';
    div.addEventListener('click', createCourse);

    const h1 = document.createElement('h1');
    h1.className = 'addCourseText';
    h1.textContent = "Add New Course";

    div.appendChild(h1);
    return div;
}
/*
Navigate to the different pages
*/
function createCourse() {
    window.location.href = "createCourse.html";
}
function viewCourse() {
    const data = courses[this.id];
    sessionStorage.setItem('currentCourseData', JSON.stringify(data));
    window.location.href = "courseDetail.html";
}

