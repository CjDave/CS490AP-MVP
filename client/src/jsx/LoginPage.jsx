import React from "react";
import { DEMainFrame, DEMainFrameImage, DEMainFrameText, DEButton, DEInput, DEFormGroup, DEFormText, DETextHref, DEFormGroupButton, DEErrorMsg } from "./components";
import { checkLogin } from "../logic/api";
import "../css/LoginPage.css";
import loginImage from "../assets/loginImage.png";
import mascotImage from '../assets/mascot.png';

//Card Design for the login
function LoginCard() {
  return (
    <section id="loginCard">
      <aside className="loginImageCard">
        <img src={loginImage} alt="loginImage" className="loginImage"></img>
      </aside>
      <aside className="loginSection">
        <DEFormGroup>
          <DEFormText> Username </DEFormText>
          <DEInput type="text" placeholder="Username" id="usernameInput"></DEInput>
        </DEFormGroup>
        <DEFormGroup>
          <DEFormText> Password</DEFormText>
          <DEInput type="password" placeholder="Password" id="passwordInput"></DEInput>
        </DEFormGroup>
        <DEFormGroupButton>
          <DEButton className="loginBtn" id="LoginButton" onClick={login}>Login</DEButton>
        </DEFormGroupButton>
        <DEErrorMsg id="errorMsg">Error with Signing In</DEErrorMsg>
      </aside>
    </section>
  );
}
//Design For create account section
function CreateAccountLink() {
  return (
    <section>
      <DEFormGroup id="TroubleLink">
        <DEFormText id="create-1"> New Student/Teacher? </DEFormText>
        <DETextHref id="create-2" href="createAccount.html" >Create Account</DETextHref>

      </DEFormGroup>
    </section>
  );
}
//Design for the login page
function LoginPage() {
  return (
    <DEMainFrame>
      <aside className="sideFrame">
        <DEMainFrameImage src={mascotImage} />
        <DEMainFrameText>490 Courses </DEMainFrameText>
      </aside>
      <aside>
        <LoginCard></LoginCard>
        <CreateAccountLink></CreateAccountLink>
      </aside>
    </DEMainFrame>
  );
}

//Handle Login
async function login() {
  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username && password) {
    const response = await checkLogin(username, password); //call api to handle login
    if (response.ok) {
      sessionStorage.setItem('username', username);
      sessionStorage.setItem('isLoggedIn', 'true');
      window.location.href = "homePage.html";
    }
    else {
      errorMsg.innerText = "Incorrect Username or Password entered";
      errorMsg.style.display = "block";
    }
  }
  else {
    errorMsg.innerText = "Please enter both username and password";
    errorMsg.style.display = "block";
  }
}

export { LoginPage };
