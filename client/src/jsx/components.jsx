/*
THIS FILE CONTAINS ALL THE RE-USABLE UI ELEMENTS FOR THE WEBSITE
*/

import React, { useRef, useEffect, forwardRef } from 'react';
import "../css/components.css";
import { logout, navHome } from "../logic/utils";

//My Version of text input 
function DEInput({ className, type, children, id, placeholder, ...props }) {
  return (
    <input
      className="DEInput_Class"
      id={id}
      type={type}
      placeholder={placeholder}
      {...props}
    ></input>
  );
}

//My Version of Button
function DEButton({ className, type, id, children, ...props }) {
  return (
    <button className="DEButton_Class" id={id} type={type} {...props}>
      {children}
    </button>
  );
}
function DEFormText({ className, type, id, children, ...props }) {
  return (
    <p id={id} className="DEFormText_Class">
      {children}
    </p>
  );
}
function DEFormTextLarge({ className, type, id, children, ...props }) {
  return (
    <p id={id} className="DEFormTextLarge_Class">
      {children}
    </p>
  );
}
function DEFormGroup({ className, type, id, children, ...props }) {
  return (
    <div className="DEFormGroup_Class" id={id} type={type} {...props}>
      {children}
    </div>
  );
}
function DETextHref({ className, href, id, children, ...props }) {
  return (
    <a id={id} className="DETextHref_Class" href={href}>
      {children}
    </a>
  );
}
function DEErrorMsg({ className, href, id, children, ...props }) {
  return (
    <p id={id} className="DEErrorMsg_Class">
      {children}
    </p>
  );
}
function DEFormGroupButton({ className, type, id, children, ...props }) {
  return (
    <div className="DEFormGroupButton_Class" id={id} type={type} {...props}>
      {children}
    </div>
  );
}
function DELargeHeader({ className, id, children, ...props }) {
  return (
    <p id={id} className="DELargeHeader_Class">
      {children}
    </p>
  );
}
function DEMainFrame({ className, type, id, children, ...props }) {
  return (
    <div id={id} className="DEMainFrame_Class">
      {children}
    </div>
  );
}
function DEMainFrameImage({ className, type, id, src, children, ...props }) {
  return (
    <img id={id} src={src} className="DEMainFrameImage_Class" />
  );
}
function DEMainFrameText({ className, type, id, children, ...props }) {
  return (
    <p id={id} className="DEMainFrameText_Class">
      {children}
    </p>
  );
}

function DEHeader({ className, type, id, imgSrc, children, OnClick, OnClickHome, ...props }) {
  return (
    <div className="DEHeader_Class" onClick={navHome}>
      <img class="headerMascot" src={imgSrc}></img>
      <p class="headerMascotText">490 Courses</p>
      <div class="logoutDiv" onClick={logout} >
        <p class="logoutText">Logout</p>
      </div>
    </div>
  );
}

/*
Componenets for specific pages
*/

function ViewCourseCard({ OnClick, className, type, cardId, imgSrc, titleText, infoText, hrefText, ...props }) {
  return (
    <div className="ViewCourseCard" id={cardId} onClick={OnClick}>
      <img class="ViewCourseImage" src={imgSrc}></img>
      <h1 class="ViewCourseTitle">{titleText}</h1>
      <p class="ViewCourseInfo">{infoText}</p>
      <a class="ViewCourseHref"> {hrefText}</a>
    </div>
  );
}
function createViewCourseCard(props) {
  return (
    <div className="ViewCourseCard" id={props.cardId} onClick={props.OnClick}>
      <img className="ViewCourseImage" src={props.imgSrc} />
      <h1 className="ViewCourseTitle">{props.titleText}</h1>
      <p className="ViewCourseInfo">{props.infoText}</p>
      <a className="ViewCourseHref">{props.hrefText}</a>
    </div>
  );
}
function AddCourse({ OnClick, ...props }) {
  return (
    <div className="addCourseDiv" onClick={OnClick}>
      <h1 class="addCourseText">Add New Course</h1>
    </div>
  );
}
function StudentsList({ id, children, OnClick, ...props }) {
  return (
    <div className="studentsListClass" id={id}>
      {children}
    </div>
  );
}
function StudentsUI({ id, children, OnClick, ...props }) {
  return (
    <div className="studentsUI">
      <p>
        {children}
      </p>
      <input id={id} className="studentUICheckbox" type="checkbox"></input>
    </div>

  );
}
function MenuSliders({ id, children, imgSrc, OnClick, handleChange, ...props }) {
  return (
    <div className="canvasToolButton">
      <img src={imgSrc} width="25" height="25"/>
      <input onChange={handleChange} type="range" min="1" max="100" defaultValue="20" class="canvasInput" id={id}></input>

    </div>
  );
}
const MenuButtons = forwardRef(({ id, imgSrc, onClick, ...props }, ref) => {
  return (
    <div onClick={onClick} className="menuButton" ref={ref} id={id} {...props}>
      <img width="28" height="28" src={imgSrc} alt="menu button" />
    </div>
  );
});
function ColourPicker({ id, children, imgSrc, OnClick, text, ...props }) {
  return (
    <div className="colourPickerDiv">
      <input type="color" id={id}></input>
      <MenuText>{text} </MenuText>
    </div>
  );
}
function MenuText({ children, ...props }) {
  return (
    <p className="colourPickerText">{children}</p>
  );
}
const DECanvas = ({ draw, ...rest }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    draw(context);
  }, [draw]);

  return <canvas ref={canvasRef} {...rest} />;
};



export {
  DEInput,
  DEButton,
  DEFormGroup,
  DEFormText,
  DEFormTextLarge,
  DETextHref,
  DEFormGroupButton,
  DEErrorMsg,
  DELargeHeader,
  DEMainFrame,
  DEMainFrameText,
  DEMainFrameImage,
  DEHeader,
  ViewCourseCard,
  AddCourse,
  StudentsList,
  StudentsUI,
  createViewCourseCard,
  MenuSliders,
  MenuButtons,
  MenuText,
  ColourPicker,
  DECanvas
};
