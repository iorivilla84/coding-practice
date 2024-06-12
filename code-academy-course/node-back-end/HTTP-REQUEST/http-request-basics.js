/* ----- initializing the http request ------ */
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello World')
})

server.listen(4001, () => {

})

// server.listen(8080, () => {
//   const { address, port } = server.address();
//   console.log(`Server is listening on: http://${address}:${port}`);
// })


/* ----- getting a http request URL from a website to load users data ------ */
const http = require('http');

const url = 'http://example.com/users/25/projects?type=personal&month=january';

// Make a GET request with the URL and process the response.
http.get(url, (res) => {
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log(data);
  });
});


/* ----- URL Module to deconstruct a URL into its constituent parts ------ */
const url = require('url');

const URL_TO_PARSE = 'https://www.example.com/p/a/t/h?prop1=value1&prop2=value2';

const myUrl = new URL(URL_TO_PARSE);

// const hostname =  myUrl.hostname; // example.com
// const pathname = myUrl.pathname; // /p/a/t/h
// const searchParams = myUrl.searchParams; // {query: 'string'}

//---- simplified way

myUrl.pathname = '/p/a/t/h'; // /p/a/t/h
myUrl.search = '?query=string'; // {query: 'string'}

myUrl.toString(); // Creates https://www.example.com/p/a/t/h?query=string


/* ----- The Querystring Module to manipulate object and key values ------ */

const querystring = require('querystring');

const theUrl = 'https://www.example.com/p/a/t/h?course=node&lesson=http';

const queryToParse = theUrl.split('?')[1]; // course=node&lesson=http

const parsedQuery = querystring.parse(queryToParse); // [Object: null prototype] { course: 'node', lesson: 'http' }

parsedQuery.exercise = 'querystring'; // append to url (exercise=querystring)

const modifiedQueryString = querystring.stringify(parsedQuery); // course=node&lesson=http&exercise=querystring
console.log(modifiedQueryString);



/* ----- Routing To process and respond to requests appropriately ------*/
const http = require('http');

// Creates server instance
const myServer = http.createmyS((req, res) => {
  // Write server code here
  const { method } = req;

  const handleGetRequest = (req, res) => {
    const pathname = req.url;

    if (pathname === '/users') {
      return res.end(JSON.stringify([]));
    }
  }

  switch(method) {
    case 'GET':
      if (method === 'GET') {
        return handleGetRequest(req, res);
      };
  }
});

// Starts server listening on specified port
myServer.listen(4001, () => {
  const { address, port } = server.address();
  console.log(`Server is listening on: http://${address}:${port}`);
});


/* ----- HTTP Status Codes ------ */

/* 
*Informational: Range from 100 to 199.
*Successful: Range from 200 to 299.
*Redirects: Range from 300 to 399.
*Client Errors: Range from 400 to 499.
*Server Errors: Range from 500 to 599.
 */

const http = require('http');

const handleGetRequest = (req, res) => {
  // Set GET status code here
  res.statusCode = 200;
  return res.end(JSON.stringify({ data: [] }));
}

const handlePostRequest = (req, res) => {
  // Set POST status code here
  res.statusCode = 500;
  return res.end("Unable to create record");
}

// Creates server instance
const theServer = http.createServer((req, res) => {
  const { method } = req;
 
  switch(method) {
    case 'GET':
      return handleGetRequest(req, res);
    case 'POST':
      return handlePostRequest(req, res);
    default:
      throw new Error(`Unsupported request method: ${method}`);
  }
});

// Starts server listening on specified port
theServer.listen(4001, () => {
  const { address, port } = server.address();
  console.log(`Server is listening on: http://${address}:${port}`);
});


/* ----- Interacting with a Database ------ */

const http = require('http');
const fs = require('fs');

// GET request handler
const handleTheGetRequest = (req, res) => {
 if (req.url === '/users') {
   // Loads the database and searches for data
   makeDatabaseRequest('users', (err, payload) => {
      if (err) {
        res.writeHeader(400);
        res.write("Error retrieving data");
      } else {
        // Process successful request
        console.log('Content is' + payload);
        res.writeHeader(200, {"Content-Type": "application/json"});  
        res.write(JSON.stringify(payload));
      }
      res.end(); 
   });
 }
}

// Creates server instance
const elServer = http.createServer((req, res) => {
  const { method } = req;
 
  switch(method) {
    case 'GET':
      return handleTheGetRequest(req, res);
    default:
      throw new Error(`Unsupported request method: ${method}`);
  }
});

// Starts server listening on specified port
elServer.listen(4001, () => {
  const { address, port } = server.address();
  console.log(`Server is listening on: http://${address}:${port}`);
});

function makeDatabaseRequest(type, cb) {
  fs.readFile('./database.json', 'utf8', function (err, payload) {
    if (err) {
      cb(err, null); 
    } else {
      cb(null, JSON.parse(payload)[type]);
    }
  });
}

/* ----- Interacting with Another Backend API ------ */
const http = require('http');
const https = require('https');

const handleGetTheRequest = (req, res) => {
  // Write external API request code here
  const options = {
    hostname: 'static-assets.codecademy.com',
    path: '/Courses/Learn-Node/http/data.json',
    method: 'GET'
  }

  const request = https.request(options, response => {
    let data = '';

    response.on('data', chunk => {
      data += chunk;
    });

    response.on('end', () => {
      console.log(data);
      res.end(data);
    });
  });

  request.end();
}

// Creates server instance
const inTheServer = http.createServer((req, res) => {
  const { method } = req;
 
  switch(method) {
    case 'GET':
      return handleGetTheRequest(req, res);
    default:
      throw new Error(`Unsupported request method: ${method}`);
  }
});

// Starts server listening on specified port
inTheServer.listen(4001, () => {
  const { address, port } = server.address();
  console.log(`Server is listening on: http://${address}:${port}`);
});

/* 
There are 4 basic HTTP verbs we use in requests to interact with resources in a REST system:

GET — retrieve a specific resource (by id) or a collection of resources
POST — create a new resource
PUT — update a specific resource (by id)
DELETE — remove a specific resource by id
*/