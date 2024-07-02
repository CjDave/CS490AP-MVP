/*
THIS FILE CONTAINS re-usable js functions
*/

//check if the user is logged in, used in login/create page to make access quicker
function checkIfLoggedIn() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        window.location.href = "homePage.html";
    }
}

//check if the user is logged out before entering a restricted page
function checkIfLoggedOut() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn != 'true') {
        window.location.href = "index.html";
    }

}

function logout() {
    sessionStorage.clear();
    window.location.href = "index.html";
}

function navHome() {
    window.location.href = "homePage.html";
}


export { navHome, checkIfLoggedIn, checkIfLoggedOut, logout };
