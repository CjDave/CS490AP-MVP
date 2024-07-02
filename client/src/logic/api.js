/*
THIS FILE CONTAINS ALL THE FUNCTIONS PERTAINING TO API REQUESTS SUCH AS GET, POST
*/


//const hostUrl = 'http://localhost:8080/'; //if you want to access the api's locally
const hostUrl = 'https://cs490ap.uc.r.appspot.com/';
/*
const hostUrl = 'https://avocates.nn.r.appspot.com/'; //if You want to access the api's through on the cloud
*/

//Sends API Request to check if username and password match
async function checkLogin(username, password) {
    const url = `${hostUrl}login?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response;
}
//Sends API Request to create a user on the db
async function createUser(username, fullName, password, email, role) {
    const url = `${hostUrl}create/users?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&fullName=${encodeURIComponent(fullName)}&email=${encodeURIComponent(email)}&role=${encodeURIComponent(role)}`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response;
}
//Sends API Request to create a course
async function createCourses(courseName, courseNumber, description, username, students) {
    const url = `${hostUrl}create/courses`;
    const body = {
        courseName: courseName,
        courseNumber: courseNumber,
        description: description,
        creatorUsername: username,
        students: students
    };
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    return response;
}
//Sends API Request to retrive the list of courses of a current user
async function getCourses(username) {
    const url = `${hostUrl}get/courses?username=${encodeURIComponent(username)}`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response;
}
async function getAllCourses(username) {
    const url = `${hostUrl}get/allCourses/`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response;
}
//Sends API Request to add a url of the course uploads to a course
async function addContentUrl(courseNumber, url) {
    const encodedUrl = encodeURIComponent(url);
    const apiUrl = `${hostUrl}get/courses/course?number=${encodeURIComponent(courseNumber)}&url=${encodedUrl}`;
    console.log(apiUrl);
    const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response;
}
//Sends API Request to  get the list of urls of the course uploads
async function getUploadsUrl(courseNumber) {
    const apiUrl = `${hostUrl}get/courses/course/urls?number=${encodeURIComponent(courseNumber)}`;

    const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    
    return data;
}
export { getUploadsUrl, addContentUrl, getCourses,getAllCourses, checkLogin, createUser, createCourses };