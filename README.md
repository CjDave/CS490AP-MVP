

# Project Phase 2

## Important
This MVP's stable version was presented in class: https://cs490ap.web.app/
</br> 
</br> ~~After the presentation, while trying to tidy up the code, I broke something related to video streaming so running the code locally doesn't work well in regards to the video streaming.~~
</br> ~~Access the stable version of the MVP that has all the features working here: https://cs490ap.web.app/~~
</br> ~~I'm currently working on figuring out the bug and fixing it~~
</br>

 Update: I found the bug and fixed it

#### PS: When testing the video streaming features, you'll need two different laptops or a laptop with multiple cameras.

### User accounts
```
//Admin account has extra features 
username: SUPERUSER
password: SUPERUSER

//The account you created
username: Orland
password: abc123456

username: test
password: test@123
```


## Updates from MVP Phase one
Most of the changes that I made in this phase are in these files canvasPage.jsx and video.jsx
</br> 
## File Structure

All the code for the server logic is in the `Cloud` folder and the code for the web app code is in the `client` folder. The client folder also contains config files for hosting the website

## Initialise Repositories

### Init Cloud 

To initialise the cloud functions, run the following command to install the dependencies:
`npm install cors express mongodb`

To start the server, run: `npm start`

The server is also hosted on Google Cloud and is the default endpoint, if it doesn't work or want to switch between the Google Cloud endpoint or  local one, uncomment the following line in `api.js` and comment out the local URL line:

```javascript
// const hostUrl = 'http://localhost:8080/';
const hostUrl = 'https://avocates.nn.r.appspot.com/'; // Use this line to access the APIs through the server` 
```

### Init Client
To initialise the client application, go to the `client` folder and run: `npm install` </br>
To start the  server locally, run: `npm run dev` 


## Project Structure
```
project-root/
│
├── client/
│   ├── src/
│   │   ├── assets/
│   │   │   ├── .....images
│   │   ├── css/
│   │   │   ├── App.css
│   │   │   ├── components.css
│   │   │   ├── courseDetailPage.css
│   │   │   ├── createCoursePage.css
│   │   │   ├── canvasPage.css
│   │   │   ├── homePage.css
│   │   │   ├── index.css
│   │   │   └── LoginPage.css
│   │   ├── jsx/
│   │   │   ├── components.jsx
│   │   │   ├── courseDetailPage.jsx
│   │   │   ├── CreateAccountPage.jsx
│   │   │   ├── canvasPage.jsx
│   │   │   ├── video.jsx
│   │   │   ├── createCoursePage.jsx
│   │   │   ├── homePage.jsx
│   │   │   ├── index.jsx
│   │   │   └── LoginPage.jsx
│   │   └── logic/
│   │       ├── api.js
│   │       ├── firebase.js
│   │       └── utils.js
│   ├── .eslintrc.cjs
│   ├── .gitignore
│   ├── cors.json
│   ├── courseDetail.html
│   ├── createAccount.html
│   ├── createCourse.html
│   ├── canvasPage.html
│   ├── homePage.html
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
│
└── cloud/
    ├── .gitignore
    ├── app.yaml
    ├── package-lock.json
    ├── package.json
    └── server.js
```



