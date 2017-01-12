'use strict';

const FauxMo = require('fauxmojs');

var ipAddress = '192.168.1.102'
var startPort = 11000

var alldevices = ['office light', 'office fan']

var devices = []
for (var i in alldevices) {
    console.log(i)
    devices[i] = {
        name: alldevices[i],
        port: startPort,
        handler: (action) => {
            console.log('action', action)
        }
    }
    startPort++
}

console.log(devices);

let fauxMo = new FauxMo({
    ipAddress: ipAddress,
  /*  devices: [{
        name: 'office light',
        port: 11000,
        handler: (action) => {
            console.log('office light action:', action);
        }
    }, {
        name: 'office fan',
        port: 11001,
        handler: (action) => {
            console.log('office fan action:', action);
        }
    }]*/
    devices: devices
});

console.log('started..');
