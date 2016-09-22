// OOP
var Controller = function(view) {
  this.view = view;
  this.view.makeTrack();
}

Controller.prototype = {
  bindEvents: function() {
    window.addEventListener("keyup", this.move.bind(this));
    document.querySelector("input").addEventListener("click", this.view.reload);
  },

  countdown: function() {
    setTimeout(this.view.update_countdown, 1000);
    setTimeout(this.view.update_countdown, 2000);
    setTimeout(this.view.update_countdown, 3000);
  },

  finish: function() {
    if (this.view.racer1[20].className == 'active') {
      alert("racer 1");
      window.removeEventListener("keyup", this.move);
    }

    else if (this.view.racer2[20].className == 'active') {
      alert("racer 2 ");
      window.removeEventListener("keyup", this.move);
    }
  },
  move: function(e) {
    if (number.innerHTML === "0") {

      if (e.keyCode === 80) {
        this.view.racer1[i_1].className = 'inactive';
        this.view.racer1[i_1+1].className = 'active';
        i_1 += 1
      }
      if (e.keyCode === 81) {
        this.view.racer2[i_2].className = 'inactive';
        this.view.racer2[i_2+1].className = 'active';
        i_2 += 1
      }
      controller.finish()
    }
  }
}

var View = function() {
  this.track1 = document.getElementById('player1_strip')
  this.track2 = document.getElementById('player2_strip')
  this.racer1 = this.track1.children;
  this.racer2 = this.track2.children;
}

View.prototype = {
  makeTrack: function() {
    this.populateTrack(document.getElementById("player1_strip"));
    this.populateTrack(document.getElementById("player2_strip"));
  },

  populateTrack: function(player_strip) {
    for (var i=0; i<20; i++) {
      var td = document.createElement('td');
      td.classList.add('inactive');
      player_strip.appendChild(td);
    }
  },

  reload: function() {
    location.reload();
  },

  update_countdown: function() {
    var number = document.querySelector("#counter");
    number.innerHTML -= 1;
  }
}

var i_1 = 0
var i_2 = 0
var number = document.querySelector("#counter");


var view = new View();
var model = new Model()
var controller = new Controller(view, model);
controller.bindEvents();
controller.countdown();
