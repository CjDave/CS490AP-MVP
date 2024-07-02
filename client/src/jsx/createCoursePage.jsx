import React from 'react';
import ReactDOM from "react-dom/client";
import { createCourses } from "../logic/api";
import { checkIfLoggedOut } from "../logic/utils";
import { StudentsList, StudentsUI, DEHeader, DEMainFrame, DEMainFrameImage, DEMainFrameText, DEButton, DEInput, DEFormGroup, DELargeHeader, DEFormTextLarge, DEFormGroupButton, DEErrorMsg } from "./components";
import mascotImage from '../assets/mascot.png';
import loginImage from '../assets/loginImage.png';
import '../css/LoginPage.css';
import "../css/index.css";
import '../css/createCoursePage.css';

//Create Main UI for page
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DEHeader imgSrc={mascotImage}></DEHeader>
    <DELargeHeader> Create New Course</DELargeHeader>
    <DEMainFrame>
      <aside className="sideFrame">
        <DEMainFrameImage src={mascotImage} />
        <DEMainFrameText>490 Courses </DEMainFrameText>
      </aside>
      <section id="createAccountCard">
        <aside className="loginImageCard">
          <img src={loginImage} alt="loginImage" className="loginImage"></img>
        </aside>
        <aside className="loginSection">

          <DEFormGroup>
            <DEFormTextLarge> Course Name </DEFormTextLarge>
            <DEInput type="text" placeholder="course Name" id="courseNameInput"></DEInput>
          </DEFormGroup>
          <DEFormGroup>
            <DEFormTextLarge> Course Number</DEFormTextLarge>
            <DEInput type="text" placeholder="Course Number" id="courseNumberInput"></DEInput>
          </DEFormGroup>

          <DEFormGroup>
            <DEFormTextLarge className="createAccount-formText"> Description</DEFormTextLarge>
            <DEInput type="text" id="courseDescriptionInput"></DEInput>
          </DEFormGroup>

          <DEFormGroup>
            <DEFormTextLarge className="createAccount-formText"> Add Students</DEFormTextLarge>

            <StudentsList id="students">
              <StudentsUI id="students_1"> King Leslie  </StudentsUI>
              <StudentsUI id="students_2"> Ayo manyike  </StudentsUI>
              <StudentsUI id="students_4"> Princewill  L </StudentsUI>
              <StudentsUI id="students_5"> Faraday Will </StudentsUI>
              <StudentsUI id="students_6"> Joey Great </StudentsUI>
            </StudentsList>

          </DEFormGroup>

          <DEFormGroupButton>
            <DEButton className="loginBtn" id="createAccountButton" onClick={createCourse}>Create</DEButton>
          </DEFormGroupButton>
          <DEErrorMsg id="errorMsg" >Error with Signing In</DEErrorMsg>
        </aside>
      </section>
    </DEMainFrame>
  </React.StrictMode>
);

//Create the course and add it to the Database
async function createCourse() {
  const courseName = courseNameInput.value;
  const courseNo = courseNumberInput.value;
  const description = courseDescriptionInput.value;
  const username = sessionStorage.getItem('username');
  const checkedStudents = [];

  const student = students.querySelectorAll('div');
  student.forEach(studentNode => {
    const checkbox = studentNode.querySelector('input[type="checkbox"]');
    if (checkbox.checked) {
      const studentName = studentNode.textContent.trim();
      checkedStudents.push(studentName);
    }
  });

  if (courseName && courseNo && description) {
    const response = await createCourses(courseName, courseNo, description, username, checkedStudents);
    if (response.ok) {
      window.location.href = "homePage.html";

    }
    else {
      errorMsg.innerText = "An error occured";
      errorMsg.style.display = "block";
    }
  }
  else {
    errorMsg.innerText = "Please fill in all fields";
    errorMsg.style.display = "block";
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  checkIfLoggedOut();
});