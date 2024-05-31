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
const server = http.createServer((req, res) => {
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
server.listen(4001, () => {
  const { address, port } = server.address();
  console.log(`Server is listening on: http://${address}:${port}`);
});

