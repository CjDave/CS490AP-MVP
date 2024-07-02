/*
The logic and functions for making webrtc work where gotten from this youtube tutorial https://www.youtube.com/watch?v=WmR9IMUD_CY
His code is also on github https://github.com/fireship-io/webrtc-firebase-demo
His code is 3 years old and written in plain js, I adapted it to work witth react and the latest version of firebase, I also made minor changes to the ui, logic and functionaity to suit my needs


This file conatins all the code for hnadle two way video streaming
*/

import React, { useRef, useEffect } from 'react';
import { DEButton, DEFormText, DEErrorMsg } from './components';
import { returnFirestore } from "../logic/firebase";
import { collection, addDoc, setDoc, getDoc, doc, updateDoc, onSnapshot } from "firebase/firestore";
import copyIcon from '../assets/copyIcon.png';

function VideosDiv() {
const myVideoRef = useRef(null);
const remoteVideoRef = useRef(null);
const callCode = useRef(null);
const callText = useRef(null);
const localStreamRef = useRef(null);
const remoteStreamRef = useRef(null);


const firestore = returnFirestore();

//Setup webrtc protocols - BEGIN
const constraints = {
    video: true,
    audio: true
};
const servers = {
    iceServers: [
        {
            urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
        },
    ],
    iceCandidatePoolSize: 10,
};
const pc = new RTCPeerConnection(servers);
useEffect(() => {
    return () => {
        //stopStreaming();
    };
}, []);
//Setup webrtc protocols - END 

//Get the users camera and add it to pc
async function startStreaming() {
    try {
        const localStream = await navigator.mediaDevices.getUserMedia(constraints);
        localStreamRef.current = localStream;

        localStream.getTracks().forEach(track => pc.addTrack(track, localStream));

        pc.ontrack = (event) => {
            const remoteStream = event.streams[0];
            remoteStreamRef.current = remoteStream;
            if (remoteVideoRef.current) {
                remoteVideoRef.current.srcObject = remoteStream;
            }
        };

        myVideoRef.current.srcObject = localStream;
    } catch (err) {
        console.error('Error starting streaming:', err);
    }
}
//clean up stream
async function stopStreaming() {
    const localStream = localStreamRef.current;
    const remoteStream = remoteStreamRef.current;
    if (pc) {
        pc.close();
        window.location.reload();
    }
    if (localStream) {
        localStream.getTracks().forEach(track => track.stop());
        localStreamRef.current = null;
    }
    if (remoteStream) {
        remoteStream.getTracks().forEach(track => track.stop());
        remoteStreamRef.current = null;
    }
}

async function createOffer() {
    try {
        await startStreaming();
        const callDocRef = await addDoc(collection(firestore, 'calls'), {});
        const answerCandidates = collection(callDocRef, 'answerCandidates');
        const callId = callDocRef.id;
        callCode.current.textContent = callId;

        pc.onicecandidate = async (event) => {
            if (event.candidate) {
                await addDoc(collection(callDocRef, 'offerCandidates'), event.candidate.toJSON());
            }
        };

        const offerDescription = await pc.createOffer();
        await pc.setLocalDescription(offerDescription);

        const offer = {
            sdp: offerDescription.sdp,
            type: offerDescription.type,
        };

        await setDoc(callDocRef, { offer });

        const on2 = onSnapshot(callDocRef, (snapshot) => {
            const data = snapshot.data();
            if (!pc.currentRemoteDescription && data?.answer) {
                const answerDescription = new RTCSessionDescription(data.answer);
                pc.setRemoteDescription(answerDescription);
            }
        });

        const on3 = onSnapshot(answerCandidates, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === 'added') {
                    const candidate = new RTCIceCandidate(change.doc.data());
                    pc.addIceCandidate(candidate);
                }
            });
        });
    } catch (err) {
            console.error('Error creating offer:', err);
    }
}

async function answerCall() {
    try {
        await startStreaming();

        const callId = callText.current.value;
        const callDocRef = doc(firestore, 'calls', callId);

            console.log(pc);
            const answerCandidates = collection(callDocRef, 'answerCandidates');

        pc.onicecandidate = async (event) => {
            if (event.candidate) {
                await addDoc(collection(callDocRef, 'answerCandidates'), event.candidate.toJSON());
            }
        };

        const callData = await getDoc(callDocRef);
            console.log(callData.data());
        const offerDescription = callData.data().offer;
        await pc.setRemoteDescription(new RTCSessionDescription(offerDescription));

        const answerDescription = await pc.createAnswer();
        await pc.setLocalDescription(answerDescription);

        const answer = {
            type: answerDescription.type,
            sdp: answerDescription.sdp,
        };

        await updateDoc(callDocRef, { answer });

        const offerCandidates = collection(callDocRef, 'offerCandidates');
        const on4 = onSnapshot(offerCandidates, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === 'added') {
                    const candidate = new RTCIceCandidate(change.doc.data());
                    pc.addIceCandidate(candidate);
                }
            });
        });
    } catch (err) {
            console.error('Error answering call:', err);
    }

}

function copyCodeToClipboard() {
    const textToCopy = callCode.current.textContent;
    navigator.clipboard.writeText(textToCopy);
}
return (
    <div id="videosDiv">
        <h2 className="mediumTitle"> My Video</h2>
        <video id="myVideo" ref={myVideoRef} autoPlay></video>
        <div id="controlsDiv">
            <div class="horizontalDiv">
                <DEButton id="startCallButton" onClick={createOffer}>Start Call</DEButton>
                <DEButton id="endCallButton" onClick={stopStreaming}>End Call</DEButton>
            </div>
        </div>
        <div class="horizontalDiv">
            <DEFormText id="videoDivHeader"> Meeting Code : </DEFormText>
            <p id="callCode" type="text" ref={callCode}></p>
            <img id="copyCode" src={copyIcon} onClick={copyCodeToClipboard}></img>
        </div>

        <h2 className="mediumTitle"> Other Video</h2>
        <video id="remoteVideo" ref={remoteVideoRef} autoPlay></video>
        <div class="horizontalDiv">
            <input id="callText" ref={callText} type="text" placeholder='Enter Meeting Code To Join'></input>
            <DEButton id="joinCallButton" onClick={answerCall}>Join Call</DEButton>

        </div>
     
    </div>
);
}

export { VideosDiv };