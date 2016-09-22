/////////////////////////////////////////////////////////////////////////////////////////
//////// OOP
//////////////////////////////////////////////////////////////////////////////////////////

function Track(trackLength, trackContainer) {
  this.trackLength = trackLength
  this.trackContainer = trackContainer
}

Track.prototype = {
  createTrack: function(player) {
    var track = document.createElement('tr');
    track.classList.add(`player${player.number}_strip`)
    player.track = track
    this.populateTrack(player)
  },
  populateTrack: function(player) {
    for (var i=0; i < this.trackLength; i++) {
      var td = document.createElement('td');
      if (i === 0) {
        td.classList.add('active')
      } else {
        td.classList.add('inactive');
      }
      player.track.appendChild(td);
    }
  },
  resetTrack() {
    for (var i=0; i < this.trackLength; i++) {
      if (i === 0) {
        td.classList.add('active')
      } else {
        td.classList.add('inactive');
      }
      player.track.appendChild(td);
    }
  }
}

function Player(number, moveKey) {
  this.moveKey = moveKey
  this.number = number
  this.currentIndex = 0
}

Player.prototype = {
  move: function(raceStart) {
    console.log(raceStart)
    if (raceStart) {
       this.track.children[this.currentIndex].className = 'inactive'
       this.track.children[this.currentIndex+1].classList.add('active')
       this.currentIndex += 1
       this.finish()
    }
  },
  goToStart: function() {
    this.track.children[this.currentIndex].classList.remove('active')
    this.track.children[0].classList.add('active')
    this.currentIndex = 0
  },
  finish: function() {
    if (this.currentIndex === this.track.children.length - 1) {
      alert(`Player ${this.number} won!`)
    }
  }
}

function Game(settings) {
  this.numPlayers = settings.numPlayers
  this.keys = settings.moveKeys
  this.track = settings.track
  this.players = []
  this.raceStart = false
  this.initialize()
}

Game.prototype = {
  initialize: function(){
    this.createPlayers()
    this.createTracks()
    this.paintTracks()
    this.bindRestart()
    this.countDown()
  },
  createPlayers: function() {
    for (var i = 0; i < this.numPlayers; i++) {
      var player = new Player(i+1, this.keys[i])
      this.bindPlayerKey(player)
      this.players.push(player)
    }
  },
  createTracks: function() {
    var self = this
    this.players.forEach(function(player){
      self.track.createTrack(player)
    })
  },
  paintTracks: function() {
    var self = this
    this.players.forEach(function(player){
      self.track.trackContainer.appendChild(player.track)
    })
  },
  restart: function() {
    var number = document.querySelector("#counter");
    if (number.innerHTML === '0') {
      number.innerHTML = 3
    }
    this.players.forEach(function(player){
      player.goToStart()
    })
    this.raceStart = false
    this.countDown()
  },
  bindRestart: function() {
    console.log('hola')
    document.querySelector("[value=restart]").addEventListener("click", this.restart.bind(this))
  },
  bindPlayerKey: function(player) {
    var self = this
    document.addEventListener('keydown', function(event) {
      if (event.keyCode === player.moveKey) {
        player.move(self.raceStart)
      }
    })
  },
  countDown: function() {
    setTimeout(this.updateCountDown, 1000);
    setTimeout(this.updateCountDown, 2000);
    setTimeout(this.updateCountDown.bind(this, true), 3000);
  },
  updateCountDown: function(start) {
    var number = document.querySelector("#counter");
    number.innerHTML -= 1;
    if (start) {
      this.raceStart = true
    }
  }
}

document.getElementById('create-game').addEventListener('submit', function(event){
  event.preventDefault()
  game = new Game({
    numPlayers: event.target.numPlayers.value,
    moveKeys: [81, 80, 77, 90],
    track: new Track(30, document.getElementById('racer_table'))
  })
})
