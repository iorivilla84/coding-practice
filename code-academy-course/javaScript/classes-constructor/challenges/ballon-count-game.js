class Player {
    constructor(name, hitsPerMinute) {
      this.name = name;
      this.hitsPerMinute = hitsPerMinute;
      this.balloonCount = 100;
    }
  
    status() {
      console.log(`Player: ${this.name} -- Balloons Left: ${this.balloonCount}`)
    }
}
  
// Write function below
const balloonAttack = (p1, p2) => {
    for (let i = 1; i <= 10; i++) {
        p1.balloonCount -= p2.hitsPerMinute;
        p2.balloonCount -= p1.hitsPerMinute;
        p1.status();
        p2.status();
    }

    if (p1.balloonCount > p2.balloonCount) {
        return `${p1.name}`
    } else if (p2.balloonCount > p1.balloonCount) {
        return `${p2.name}`
    } else {
        return 'Tie'
    }
}
  
const p1 = new Player('Player 1', 2);
const p2 = new Player('Player 2', 1);
p1.hitsPerMinute = 5
p2.hitsPerMinute = 2
console.log(balloonAttack(p1, p2))
  