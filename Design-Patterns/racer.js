////////////////////////////////////////////////////////////////////////////////////////////
////////// Procedural
////////////////////////////////////////////////////////////////////////////////////////////


populateTrack(document.getElementById("player1_strip"));
populateTrack(document.getElementById("player2_strip"));


function populateTrack(player_strip) {
  for (var i=0; i<20; i++) {
    var td = document.createElement('td');
    td.classList.add('inactive');
    player_strip.appendChild(td);
  }
}

var track1 = document.getElementById('player1_strip')
var track2 = document.getElementById('player2_strip')
var racer1 = track1.children;
var racer2 = track2.children;
var i_1 = 0
var i_2 = 0
var number = document.querySelector("#counter");

function move(e) {
  if (racer1[21].className === 'active' || racer2[21].className === 'active' ) {
    return
  }
  if (number.innerHTML === "0") {

    if (e.keyCode === 80) {
      racer1[i_1].className = 'inactive';
      racer1[i_1+1].className = 'active';
      i_1 += 1
    }
    if (e.keyCode === 81) {
      racer2[i_2].className = 'inactive';
      racer2[i_2+1].className = 'active';
      i_2 += 1
    }
    finish()
  }
}

function callOnlyOnce(callback) {
  var call = 0

  return function() {
    if (call < 1) {
      call += 1
      return callback()
    } else {
      console.log('ganador ya alertado')
    }
  }
}

function alertPlaye1wins(text) {
  alert("racer 1 Wins")
}

function alertPlaye2wins(text) {
  alert("racer 2 Wins")
}

var alertOne = callOnlyOnce(alertPlaye1wins)
var alertTwo = callOnlyOnce(alertPlaye2wins)

var finish = function() {

  if (racer1[21].className == 'active') {
    alertOne()
  }

  else if (racer2[21].className == 'active') {
    alertTwo()
  }
}

var reload = function() {
  location.reload();
}

var update_countdown = function() {
    var number = document.querySelector("#counter");
    number.innerHTML -= 1;
  }


var countdown = function() {
    setTimeout(update_countdown, 1000);
    setTimeout(update_countdown, 2000);
    setTimeout(update_countdown, 3000);
}

window.addEventListener("keyup", move)
document.querySelector("input").addEventListener("click", reload)
countdown()
