var socket = require('socket.io-client')('http://192.168.50.153:3001');
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

function intervalFunc() {
  let angle = 0;
  robot.onMotion = function () {
    angle += robot.delta.angle;
    console.log('Angle:', angle);
  };
  socket.emit('angle', angle);
}

function main(r) {
  r.full();
  robot = r;
  robot.write(128);
  robot.write(132);
  console.log('init completed');
  setInterval(intervalFunc, 1000);

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
    }
  });

  socket.emit('robot', 'ROBOT CONNECTION ESTABLISHED');
}

function forward() {
  stop();
  // console.log("forward() triggered");
  robot.drive(1000, 32767);
}

function backward() {
  stop();
  robot.drive(-100, 32767);
}

function left() {
  stop();
  robot.drive(100, 1);
}

function right() {
  stop();
  robot.drive(100, -1);
}

function stop() {
  robot.drive(0, 32767);
}

function angleData() {
  var angle = 0;
  robot.onMotion = function () {
    angle += robot.delta.angle;
    console.log('Angle:', angle);
    socket.emit('angle', angle);
  };
}
