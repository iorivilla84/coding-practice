class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    set isCheckedOut(item) {
      this._isCheckedOut = item;
    }
  
    toggleCheckOutStatus() {
      if (this._isCheckedOut === true) {
        return this._isCheckedOut = false;
      } else {
        return this._isCheckedOut = true;
      }
      
    }  
  
    getAverageRating() {
      const ratingsSum = this._ratings.reduce((acc, sum) => acc + sum, 0);
      const ratingRes = ratingsSum / this._ratings.length;
      return ratingRes;
    }
  
    addRating(arr) {
      this._ratings.push(arr);
    }
  }
  
  class Book extends Media {
    constructor(author, title, pages) {
      super(title)
      this._author = author;
      this._pages = pages;
    }
  
    get author() {
      return this._author;
    }
  
    get pages() {
      this._pages;
    }
  }
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut)
  historyOfEverything.addRating(4)
  historyOfEverything.addRating(5)
  historyOfEverything.addRating(5)
  console.log(historyOfEverything.getAverageRating())
  
  class Movie extends Media {
    constructor(director, title, runTime) {
      super(title) 
      this._director = director;
      this._runTime = runTime;
    }
  
    get director() {
      return this._director;
    }
  
    get runTime() {
      return this._runTime;
    }
  }
  
  console.log('<------ Movie ----->')
  const speed = new Movie('Speed', 'Jan de Bont', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut)
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating())
  
  class Cd extends Media {
    constructor(artist, title) {
      super(title);
      this._artist = artist;
      this._songs = [
        'Paradise',
        'More',
        'Rush',
        'Summer Too Hot'
      ];
    }
  
    get artist() {
      return ths._artist;
    }
  
    get songs() {
      return this._songs;
    }
  
    updateSongs(song) {
      this._songs.push(song)
    }
  
    shuffleSongs() {
      let singleSong = [];
      this._songs.forEach(song => {
        singleSong.push(song);
      })
  
      const randomSong = Math.floor(Math.random() * 5)
      return singleSong[randomSong];
    }
  }
  
  console.log('<------ CD ----->')
  const newAlbum = new Cd('Chris Brow', 'Songs')
  newAlbum.updateSongs('This is How We roll')
  // console.log(newAlbum)
  // console.log(newAlbum.songs)
  console.log(newAlbum.shuffleSongs())
  newAlbum.addRating(1);
  newAlbum.addRating(5);
  newAlbum.addRating(4);
  console.log(newAlbum.getAverageRating())