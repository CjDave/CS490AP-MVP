/*
This file contatins the code releted to building the interactive canavas and the video
Some of the logic of the interactive canvas was gotten from a previous web game I'd done
*/

import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { MenuButtons, MenuSliders, MenuText, ColourPicker, DEHeader } from './components';
import { VideosDiv } from './video';
import {  onValue, get } from 'firebase/database';
import { initDb, updateValue } from "../logic/firebase.js";
import { checkIfLoggedOut } from "../logic/utils";

import mascotImage from '../assets/mascot.png';
import '../css/LoginPage.css';
import '../css/index.css';
import '../css/canvasPage.css';

const storedData = JSON.parse(sessionStorage.getItem('currentCourseData'));
function CanvasPage() {
    const canvasRef = useRef(null);
    const eraserRef = useRef(null);
    const penRef = useRef(null);
    const brushRef = useRef(null);
    const viewEnbldRef = useRef(null);
    const viewDsbldRef = useRef(null);
    const contextRef = useRef(null);

    let viewing = true;
    let strokes = [];
    let strokesRemote = [];
    let isDrawing = false;
    let erasing = false;
    let brushing = false;
    let pencil = false;
    let lastX = 0;
    let lastY = 0;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const context = canvas.getContext('2d');
            contextRef.current = context;

            canvas.addEventListener('mousedown', startDrawing);
            canvas.addEventListener('mousemove', draw);
            canvas.addEventListener('mouseup', stopDrawing);
            canvas.addEventListener('mouseout', stopDrawing);

            canvas.addEventListener('touchstart', startDrawing);
            canvas.addEventListener('touchmove', draw);
            canvas.addEventListener('touchend', stopDrawing);
            canvas.addEventListener('touchcancel', stopDrawing);

            return () => {
                canvas.removeEventListener('mousedown', startDrawing);
                canvas.removeEventListener('mousemove', draw);
                canvas.removeEventListener('mouseup', stopDrawing);
                canvas.removeEventListener('mouseout', stopDrawing);

                canvas.removeEventListener('touchstart', startDrawing);
                canvas.removeEventListener('touchmove', draw);
                canvas.removeEventListener('touchend', stopDrawing);
                canvas.removeEventListener('touchcancel', stopDrawing);
            };
        }
    }, []);

    //get the strokes saved in firestore
    function getDrawing() {
        const dbRef = initDb(storedData.courseName);
        // On value is a special firebase function that checks to seee whenver a document/colletion/data in the database is changed 
        // Whenever the value of the strokes is changed in the database, redarw the canvas
        onValue(dbRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                strokesRemote = Object.values(data);
                if (viewing == true) {
                    redrawCanvas();
                }
            } else {
                console.log("No data found");
            }
        });

    }
    //get the strokes from the database
    function getStrokes() {
        console.log(storedData.courseName);
        const dbRef = initDb(storedData.courseName);
        get(dbRef).then((snapshot) => {
            const data = snapshot.val();
            strokesRemote = Object.values(data);
            redrawCanvas();

        });
    }
    //get the location {x,y} of mouse/touch inputs on the canvas
    //NOTE: Did not test on touch screen laptops/phones but it should work correctly  
    const getCoordinates = (event) => {
        let x, y;
        const canvas = canvasRef.current;
        if (event.touches && event.touches.length > 0) {
            const touch = event.changedTouches[0];
            const rect = canvas.getBoundingClientRect();
            const factorX = canvas.width / rect.width;
            const factorY = canvas.height / rect.height;
            x = factorX * (touch.clientX - rect.left);
            y = factorY * (touch.clientY - rect.top);
        } else {
            x = event.offsetX;
            y = event.offsetY;
        }
        return { x, y };
    };

    const startDrawing = (event) => {
        const { x, y } = getCoordinates(event);
        isDrawing = true;
        [lastX, lastY] = [x, y];
    };

    const draw = (event) => {
        if (!isDrawing) return;
        const { x, y } = getCoordinates(event);
        const context = contextRef.current;

        if (erasing) {
            context.strokeStyle = 'white';
            context.lineWidth = eraserSlider.value;
        } else if (brushing) {
            context.strokeStyle = colourPicker.value;
            context.lineWidth = brushSlider.value;
            context.lineJoin = 'round';
            context.lineCap = 'round';
        } else if (pencil) {
            context.strokeStyle = colourPicker.value;
            context.lineWidth = penSlider.value;

            context.lineCap = 'square';
            context.lineJoin = 'miter';
        }

        context.beginPath();
        context.moveTo(lastX, lastY);
        context.lineTo(x, y);
        context.stroke();

        const stroke = {
            x1: lastX,
            y1: lastY,
            x2: x,
            y2: y,
            color: context.strokeStyle,
            lineWidth: context.lineWidth
        };
        strokes.push(stroke);
        updateValue(stroke, storedData.courseName); //store strokes
        [lastX, lastY] = [x, y];
    };

    const stopDrawing = () => {
        isDrawing = false;
    };

    //Select menu Buttons
    const updateActiveToolUI = (item) => {
        eraserRef.current.style.backgroundColor = '';
        penRef.current.style.backgroundColor = '';
        brushRef.current.style.backgroundColor = '';
        console.log(storedData);
        if (item === 'eraser') {
            eraserRef.current.style.backgroundColor = '#ffcc00';
            erasing = true;
            pencil = false;
            brushing = false;
        } else if (item === 'pen') {
            penRef.current.style.backgroundColor = '#ffcc00';
            erasing = false;
            pencil = true;
            brushing = false;
        } else if (item === 'brush') {
            brushRef.current.style.backgroundColor = '#ffcc00';
            erasing = false;
            pencil = false;
            brushing = true;
        }
    };

    //Menu Buttons 
    //Choose wheter to see others strokes or just your strokes
    const updateActiveToggleUI = (item) => {
        viewEnbldRef.current.style.backgroundColor = '';
        viewDsbldRef.current.style.backgroundColor = '';

        if (item === 'enabled') {
            viewing = true;
            viewEnbldRef.current.style.backgroundColor = '#ffcc00';
            getStrokes();
        } else if (item === 'disabled') {
            viewing = false;
            viewDsbldRef.current.style.backgroundColor = '#ffcc00';
            redrawCanvasLocal();
        }
    };
    //redraw all strokes
    function redrawCanvas() {
        const context = contextRef.current;
        const canvas = canvasRef.current;
        context.clearRect(0, 0, canvas.width, canvas.height);
        strokesRemote.forEach((stroke) => {
            context.strokeStyle = stroke.color;
            context.lineWidth = stroke.lineWidth;
            context.beginPath();
            context.moveTo(stroke.x1, stroke.y1);
            context.lineTo(stroke.x2, stroke.y2);
            context.stroke();
        });
    }
    //Redraw only your strokes
    function redrawCanvasLocal() {
        const context = contextRef.current;
        const canvas = canvasRef.current;
        context.clearRect(0, 0, canvas.width, canvas.height);
        strokes.forEach((stroke) => {
            context.strokeStyle = stroke.color;
            context.lineWidth = stroke.lineWidth;
            context.beginPath();
            context.moveTo(stroke.x1, stroke.y1);
            context.lineTo(stroke.x2, stroke.y2);
            context.stroke();
        });
    }

    checkIfLoggedOut();
    getDrawing();
    return (
        <React.StrictMode>
            <DEHeader imgSrc={mascotImage} />
            <div id="body">
                <div id="toolSection">
                    <ColourPicker text="Colour Picker" id="colourPicker" />
                    <MenuText>Adjust Tool Size</MenuText>
                    <MenuSliders imgSrc="https://img.icons8.com/ios/50/pencil--v1.png" id="penSlider" />
                    <MenuSliders imgSrc="https://img.icons8.com/ios-filled/50/paint-brush.png" id="brushSlider" />
                    <MenuSliders imgSrc="https://img.icons8.com/ios-filled/50/erase.png" id="eraserSlider" />
                    <MenuText>Choose Tool</MenuText>
                    <div className="buttonsDiv">
                        <MenuButtons onClick={() => updateActiveToolUI('pen')} ref={penRef} id="pen" imgSrc="https://img.icons8.com/ios/50/pencil--v1.png" />
                        <MenuButtons onClick={() => updateActiveToolUI('brush')} ref={brushRef} id="brush" imgSrc="https://img.icons8.com/ios-filled/50/paint-brush.png" />
                        <MenuButtons onClick={() => updateActiveToolUI('eraser')} ref={eraserRef} id="eraser" imgSrc="https://img.icons8.com/ios-filled/50/erase.png" />
                    </div>
                    <MenuText>View Others Strokes</MenuText>
                    <div className="buttonsDiv">
                        <MenuButtons onClick={() => updateActiveToggleUI('enabled')} ref={viewEnbldRef} id="viewEnbld" imgSrc="https://img.icons8.com/ios-glyphs/30/hide.png" />
                        <MenuButtons onClick={() => updateActiveToggleUI('disabled')} ref={viewDsbldRef} id="viewDsbld" imgSrc="https://img.icons8.com/material-sharp/24/visible.png" />
                    </div>
                </div>
                <canvas ref={canvasRef} id="Canvas" width="900" height="450" />
                <VideosDiv> </VideosDiv>

            </div>
        </React.StrictMode>
    );
}


ReactDOM.createRoot(document.getElementById("root")).render(<CanvasPage/>);

export default CanvasPage;
