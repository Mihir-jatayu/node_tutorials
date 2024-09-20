const express = require('express');
const crypto = require('crypto');
const http = express();
const dbconnect = require('./mongodb');
const session = require('express-session');
const collection_name = 'user';
const multer = require('multer');
const { Console } = require('console');
const upload = multer();
const cors = require('cors')

let userArr = [];  


http.use(session({
    secret: 'fa17bfeebab013203567d03dd053a939056ec93d527acaf4d47781498ec1ba880244bbc67ce423d4449c7b8fe3ff568052409cfb79f7db5b6d1fd02c5e256c8b', // Replace with your own secret key
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false, // Set to true if using HTTPS
        maxAge: 10000000000  // Session expires after 1 minute (60000 ms), adjust as needed
    }
}));

http.use(cors());

// Middleware function for login validation
async function middleware(req, res, next) {
    const userData = req.userData; // Use data passed from previous route logic
    if (userData && userData.length > 0) {
        const authToken = crypto.randomBytes(16).toString('hex');  // Generate a random token
        
        // Store the token in the session
        req.session.authToken = authToken;

        const response = await dbconnect(collection_name);
        await response.updateOne({ name: userData[0].name }, { $set: { api_token: authToken } });
        
        userArr = await response.find({ name: userData[0].name, Age: parseInt(userData[0].Age) }).toArray();
        next(); // Call the next middleware/route handler
    } else {
        res.send('User Name & Age Not Found'); // End the response here if no user data
    }
}

function isAuthenticated(req, res, next) {
    const authHeader = req.headers.authorization; // Access the Authorization header
    if (authHeader && authHeader.startsWith('Bearer')) {
        const token = authHeader.split(' ')[1]; // Extract the token from 'Bearer <token>'
        if (token === req.session.authToken) { // Compare with the session-stored token
            next(); // Token matches, proceed to the next middleware/route handler
        } else {
            res.status(401).send('Unauthorized: Invalid token');
        }
    } else {
        res.status(401).send('Unauthorized: Missing token');
    }
}


http.post('/signup',upload.none(), async (req, res) => {
    try {
        const response = await dbconnect(collection_name);
        const userData = await response.insertOne({
            name: req.body.name,
            last_name: req.body.lastName,
            Age: req.body.Age
        });
        if (userData.acknowledged) {
            const getUserData = await response.findOne({ _id: userData.insertedId });

            res.json({ success: true, message: 'User Added', data:getUserData });
        } else {
    
            res.json({ success: false, message: 'User Not Added', data: userData });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'An error occurred', error: error.message });
    }
});

// Login route with middleware
http.post('/login', upload.none(),async (req, res, next) => {
    const user = req.body.user_name;
    const pass = req.body.Age;
    const response = await dbconnect(collection_name);
    const userData = await response.find({ name: user, Age: parseInt(pass) }).toArray();
    
    req.userData = userData; // Attach userData to the request object to pass to middleware
    next(); // Pass control to the middleware
}, middleware, (req, res) => {
    res.send({message: 'Login Successful', token: req.session.authToken , data:userArr });  // Send the token to the user
});


http.use(isAuthenticated);



http.post('/getUserData',upload.none(), async (req, res) => {
    const response = await dbconnect(collection_name);
    const userData = await response.find().toArray();
    res.send(userData);
});

http.post('/addUserData',upload.none(), async (req, res) => {
    const response = await dbconnect(collection_name);
    const userData = await response.insertOne({
        name:req.body.name,
        last_name:req.body.last_name,
        Age:req.body.Age
    });
    if(userData.acknowledged){
        res.send('User Added');
    }else{
        res.send(`User Not Added ${userData}`);
    }
});



http.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send('Failed to destroy the session');
        }
        // Optionally, clear the session cookie by setting its expiry
        res.clearCookie('connect.sid'); // 'connect.sid' is the default session cookie name
        res.send('Logged out successfully');
    });
});

http.listen(2409)
