// THIS FILE GOES ON YOUR RASPI CONTROLLING THE ROOMBA
// YOU NEED TO RUN THE APP.JS FILE BEFORE YOU START YOUR SERVER

var socket = require('socket.io-client')('http://192.168.50.52:3001');
const create = require('create2');

let robot;

create.debug = false; //Data will be logged to terminal.
create.inputMode = 0; //Only relevant when debug is on.
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
  r.safe();
  robot = r;
  robot.write(128);
  robot.write(132);
  console.log('INIT COMPLETE: ROBOT ACTIVE');
  //setInterval(intervalFunc, 1000);

  socket.on('connect', () => {
    console.log('ROBOT CONNECTED');
  });

  socket.on('close', () => {
    robot.stop();
    console.log('closing connection');
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
    }
  });

  socket.emit('robot', 'ROBOT CONNECTION ESTABLISHED');
  socket.emit('active', 'ACTIVE');

  socket.on('play', (data) => {
    if (data == 'songOne') {
      console.log('PLAYING SONG ONE');
      robot.play(0);
    }
  });
}

function forward() {
  stop();
  // console.log("forward() triggered");
  robot.drive(1000, 32767);
  socket.emit('speed', 500);
  socket.emit('movement', 'Forward');
}

function backward() {
  stop();
  robot.drive(-100, 32767);
  socket.emit('speed', 100);
  socket.emit('movement', 'Backward');
}

function left() {
  stop();
  robot.drive(100, 1);
  socket.emit('speed', 100);
  socket.emit('movement', 'Left');
}

function right() {
  stop();
  robot.drive(100, -1);
  socket.emit('speed', 100);
  socket.emit('movement', 'Right');
}

function stop() {
  robot.drive(0, 32767);
  socket.emit('movement', 'Stopped');
  socket.emit('speed', 0);
}

var measure = 160;
var h = measure / 2;
var q = measure / 4;
var e = measure / 8;
var ed = (measure * 3) / 16;
var s = measure / 16;

robot.setSong(0, [
  [70, s],
  [69, s],
  [70, e],
  [64, e],
  [66, q],
  [63, ed],
  [67, s],
  [71, q],
  [67, q],
  [71, ed],
  [62, s],
  [79, q],
  [67, ed],
  [67, s],
  [79, q],
]);
