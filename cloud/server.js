const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const cors = require('cors');

const uri = "mongodb+srv://dce143:sRCJ5h54frmIFXCr@cs490.twuersv.mongodb.net/?retryWrites=true&w=majority&appName=CS490";
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

//Setup Client
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {//For testing purposes
  try {
    await client.connect();
    console.log("Pinged DB successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

//Login API

app.get('/login', async (req, res) => {
  const username = req.query.username;
  const password = req.query.password;

  if (!username || !password) {
    return res.status(401).send("Enter Username and Password");
  }

  try {
    await client.connect();
    const db = client.db("Login");
    const collection = db.collection('Users');

    // check database to see if username exists
    const user = await collection.findOne({ username: username });

    if (user) {
      if (user.password === password) { //username and password match
        return res.status(200).send("Login successful");
      } else {
        return res.status(400).send("Incorrect password");
      }
    } else {
      return res.status(404).send("User not found");
    }
  } catch (err) {
    return res.status(500).send("Internal Server Error");
  } finally {
    await client.close();
  }
});

//API to create Users
app.get('/create/users', async (req, res) => {
  try {
    await client.connect();
    const db = client.db("Login");
    const collection = db.collection('Users');

    const username = req.query.username;
    const password = req.query.password;
    const fullName = req.query.fullName;
    const email = req.query.email;
    const role = req.query.role;

    if (!username || !password || !fullName || !email || !role) {
      return res.status(400).send("All fields are required");
    }
    const existingUser = await collection.findOne({ username: username });
    if (existingUser) {
      return res.status(409).send("Username already exists");
    }
    //Update id documents 
    //Each user has a unique id that is incremental from the previously lasted used id
    const idDoc = await db.collection('Id').findOneAndUpdate(
      {},
      { $inc: { lastId: 1 } }
    );
    const lastId = idDoc.lastId;
    console.log(idDoc);
    const newUser = {
      username: username,
      password: password,
      fullName: fullName,
      email: email,
      role: role,
      id: lastId,
      createdAt: new Date()
    };

    // Insert the new user document into the collection
    const result = await collection.insertOne(newUser);
    res.status(201).send("User created successfully");
  }
  catch (err) {
    console.log(err);
    res.status(500).send("An error occurred");
  }
});

//API to add new course
app.post('/create/courses', async (req, res) => {
  try {
    await client.connect();
    const db = client.db("Login");
    const collection = db.collection('Courses');

    const { courseName, courseNumber, description, creatorUsername, students } = req.body;

    if (!courseName || !courseNumber || !description || !creatorUsername || !students) {
      return res.status(400).send("All fields are required");
    }

    const newCourse = {
      creatorUsername: creatorUsername,
      courseName: courseName,
      courseNumber: courseNumber,
      description: description,
      createdAt: new Date(),
      students: students
    };

    // Insert the new course document into the collection
    const result = await collection.insertOne(newCourse);
    console.log(result);
    res.status(201).send("Course created successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred");
  } finally {
    await client.close();
  }
});

//API to get the list of courses that a teacher has created
app.get('/get/courses', async (req, res) => {
  try {
    await client.connect();
    const db = client.db("Login");
    const collection = db.collection('Courses');

    const username = req.query.username;

    const courses = await collection.find({ creatorUsername: username }).toArray();

    res.status(200).json(courses);
  }
  catch (err) {
    console.log(err);
    res.status(500).send("An error occurred");
  }
}
);
//API to get every course
app.get('/get/allCourses', async (req, res) => {
  try {
    await client.connect();
    const db = client.db("Login");
    const collection = db.collection('Courses');
    console.log("fffff");
   const courses = await collection.find({}).toArray();
    
   res.status(200).json(courses);
  }
  catch (err) {
    console.log(err);
    res.status(500).send("An error occurred");
  }
}
);

//API to get a specific course
app.get('/get/courses/course', async (req, res) => {
  try {
    await client.connect();
    const db = client.db("Login");
    const collection = db.collection('Courses');

    const number = req.query.number;
    const url = req.query.url;

    const result = await collection.updateOne(
      { courseNumber: number },
      { $push: { urls: url } }
    );
    if (result.modifiedCount === 1) {
      res.status(200).send("Course updated successfully");
    } else if (result.matchedCount === 1 && result.modifiedCount === 0) {
      res.status(200).send("Course was already up to date");
    } else {
      res.status(404).send("No course found with the given course number");
    }
  }
  catch (err) {
    console.log(err);
    res.status(500).send("An error occurred");
  }
}
);

//API to get the download url's for files
app.get('/get/courses/course/urls', async (req, res) => {
  try {
    await client.connect();
    const db = client.db("Login");
    const collection = db.collection('Courses');

    const number = req.query.number;
    const course = await collection.findOne({ courseNumber: number })
    res.status(200).json(course.urls);
  }
  catch (err) {
    console.log(err);
    res.status(500).send("An error occurred");
  }
}
);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
