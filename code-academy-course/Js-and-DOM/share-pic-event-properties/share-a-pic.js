let social = document.getElementById('social-media');
let share = document.getElementById('share-button');
let text = document.getElementById('text');

// Write your code below
let sharePhoto = function(event) {
    text.innerHTML = event.timeStamp;

  if (share.textContent.toLowerCase() === 'share') {
    share.innerHTML = 'Close'
    event.target.style.top = '0';
  } else {
    share.innerHTML = 'Share'
    event.target.style.top = '-75px';
  }
}

share.addEventListener('click', sharePhoto)
