var socket = require('socket.io-client')('https://vroomba-time.herokuapp.com/');
const create = require('create2');

let robot;

create.debug = false; // Data will be logged to terminal.
create.inputMode = 0; // Only relevant when debug is on.
create.ports(function (ps) {
  for (var i = ps.length - 1; i >= 0; i--) {
    var name = ps[i]['comName'];
    if (name.includes('USB')) {
      ps_item = ps[i]['comName'];
      robot = create.open(name, main);

      console.log('connected to ' + name);
      break;
    } else if (i == ps.length - 1) {
      console.log('no device found');
    }
  }
});

function main(r) {
  robot = r;
  robot.safe();
  console.log('INITIATION COMPLETE');

  robot.setSong(0, [
    [86, q],
    [85, q],
    [83, e],
    [78, e],
    [78, e],
    [78, e],
    [83, e],
    [83, e],
    [83, e],
    [81, s],
    [83, e],
    [79, ed],
    [83, e],
    [83, e],
    [83, e],
  ]);

  socket.on('connect', () => {
    console.log('ROBOT CONNECTED');
  });

  socket.on('move', (data) => {
    console.log(data);
    if (data == 'forward') {
      console.log('command received: robot moving ' + data);
      forward();
    } else if (data == 'stop') {
      console.log('command received: robot stopping');
      stop();
    } else if (data == 'backward') {
      console.log('command received robot moving ' + data);
      backward();
    } else if (data == 'left') {
      console.log('command received robot moving ' + data);
      left();
    } else if (data == 'right') {
      console.log('command received robot moving ' + data);
      right();
    } else if (data == 'dock') {
      console.log('ROBOT DOCK COMMAND RECEIVED');
      returnHome();
    }
  });

  socket.on('play', (data) => {
    if (data == 'song') {
      robot.play(0);
      console.log('ROBOT PLAYING SONG');
      setTimeout(() => {
        robot.safe();
      }, 5400);
    }
  });
}

function forward() {
  stop();
  robot.drive(100, 32767);
  socket.emit('movement', 'Forward');
}

function backward() {
  stop();
  robot.drive(-100, 32767);
  socket.emit('movement', 'Backward');
}

function left() {
  stop();
  robot.drive(100, 1);
  socket.emit('movement', 'Left');
}

function right() {
  stop();
  robot.drive(100, -1);
  socket.emit('movement', 'Right');
}

function stop() {
  robot.drive(0, 32767);
  socket.emit('movement', 'Stopped');
}

function returnHome() {
  robot.autoDock();
  console.log('ROBOT DOCKING');
}

var measure = 160;
var h = measure / 2;
var q = measure / 4;
var e = measure / 8;
var ed = (measure * 3) / 16;
var s = measure / 16;
