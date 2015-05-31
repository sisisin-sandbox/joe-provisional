/// <reference path="typings/node/node.d.ts"/>
'use strict';

var app = require('app');  // Module to control application life.
var BrowserWindow = require('browser-window');  // Module to create native browser window.
var Menu = require('menu');
var Twit = require('twit');
var tokens = require('./tokens.json');
var T = new Twit(tokens);



require('crash-reporter').start();


var mainWindow = null;


app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});


app.on('ready', function() {
  Menu.setApplicationMenu(menu);
  
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600});

  // and load the index.html of the app.
  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});

var template = [
  {
    label:'settings',
    submenu:[
      { label: 'OAuth', click: function() {  } },
      { label: 'Toggle DevTools', accelerator: 'F12', click: function() { BrowserWindow.getFocusedWindow().toggleDevTools(); } }
    ]
  }
];

var menu = Menu.buildFromTemplate(template);


