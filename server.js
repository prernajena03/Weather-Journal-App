// Setup empty JS object to act as endpoint for all routes
projectData = {};
// Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Here we are configuring express to use body-parser as middle-ware.
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

const port = 3000
// Spin up the server
const server = app.listen(port, listening);
 
// Callback to debug
function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
  };

// Initialize all route with a callback function

// Callback function to complete GET '/all'
// Create JS object
const appData = {}
app.get('/all', sendData);

function sendData (request, response) {
  response.send(projectData);
};
// Post Route
// app.post('/add', callBack);

// function callBack(req,res){
//   res.send('POST received');
// }