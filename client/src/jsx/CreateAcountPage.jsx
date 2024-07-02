import React from 'react';
import ReactDOM from "react-dom/client";
import { createUser } from "../logic/api";
import { checkIfLoggedIn } from "../logic/utils";
import { DEMainFrame, DEMainFrameImage, DEMainFrameText, DEButton, DEInput, DEFormGroup, DELargeHeader, DEFormTextLarge, DETextHref, DEFormGroupButton, DEErrorMsg } from "./components";
import mascotImage from '../assets/mascot.png';
import loginImage from '../assets/loginImage.png';
import "../css/index.css";
import '../css/LoginPage.css';

//Create The UI for the create account Page
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DELargeHeader> Create Account</DELargeHeader>
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
            <DEFormTextLarge> Full Name </DEFormTextLarge>
            <DEInput type="text" placeholder="Full Name" id="fullNameInput"></DEInput>
          </DEFormGroup>
          <DEFormGroup>
            <DEFormTextLarge> Username</DEFormTextLarge>
            <DEInput type="text" placeholder="Username" id="usernameInput"></DEInput>
          </DEFormGroup>
          <DEFormGroup>
            <DEFormTextLarge> Email</DEFormTextLarge>
            <DEInput type="text" placeholder="Email" id="emailInput"></DEInput>
          </DEFormGroup>

          <DEFormGroup>
            <DEFormTextLarge className="createAccount-formText"> New Password</DEFormTextLarge>
            <DEInput type="password" placeholder="Password" id="passwordInput"></DEInput>
          </DEFormGroup>
          <DEFormGroup>
            <DEFormTextLarge className="createAccount-formText"> Confirm Password</DEFormTextLarge>
            <DEInput type="password" placeholder="Password" id="confirmPasswordInput"></DEInput>
          </DEFormGroup>
          <DEFormGroup>
            <DEFormTextLarge className="createAccount-formText"> Select Role</DEFormTextLarge>
            <select name="Role" id="selectRoleDropdown">
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
            </select>
          </DEFormGroup>
          <DEFormGroupButton>
            <DEButton className="loginBtn" id="createAccountButton" onClick={createAccount}>Create</DEButton>
            <DETextHref href="index.html">Already Have an Account?</DETextHref>
          </DEFormGroupButton>
          <DEErrorMsg id="errorMsg" >Error with Signing In</DEErrorMsg>
        </aside>
      </section>
    </DEMainFrame>
  </React.StrictMode>
);


async function createAccount() {
  const username = usernameInput.value;
  const fullName = fullNameInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  const email = emailInput.value;
  const role = selectRoleDropdown.value;

  if (username && password && fullName && confirmPassword && email) {//if all fields are complete
    if (confirmPassword != password) {
      errorMsg.innerText = "confirm Password and password don't match";
      errorMsg.style.display = "block";
      return;
    }
    const response = await createUser(fullName, username, password, email, role); //call Api to create user
    if (response.ok) { // If login was successfull
      sessionStorage.setItem('username', username);
      sessionStorage.setItem('id', response.id);
      sessionStorage.setItem('isLoggedIn', true);
      window.location.href = "homePage.html";
    }
    else {
      errorMsg.innerText = "Incorrect Username or Password entered";
      errorMsg.style.display = "block";
    }
  }
  else {
    errorMsg.innerText = "Please fill in all fields";
    errorMsg.style.display = "block";
  }
}
document.addEventListener('DOMContentLoaded', (event) => {
  checkIfLoggedIn();
});