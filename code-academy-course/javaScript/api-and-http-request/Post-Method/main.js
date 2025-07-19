// Information to reach API
const apiKey = 'b203d6e5eb7f4a17935399a2b81d6dbb';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// Asynchronous functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});

  fetch(url, {
    method: 'POST',
    body: data,
    headers: {
      'Content-type': 'application/json',
      'apikey': apiKey
    }
  })
}

// Clear page and call Asynchronous functions
const displayShortUrl = (event) => {
  event.preventDefault();
//   while(responseField.firstChild){
//     responseField.removeChild(responseField.firstChild);
//   }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);