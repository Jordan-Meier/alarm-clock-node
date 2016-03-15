(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.Clock = function(time) {
  this.time = time;
};

exports.Clock.prototype.setOffAlarm = function(alarm) {
  if (this.time === alarm);
}

},{}],2:[function(require,module,exports){
var Clock = require('./../js/clock.js').Clock;
// var moment = require('moment');


$(document).ready(function(){
  var clock = new Clock(moment().format("dddd h:mm:ss a"));
  $('#confirm').hide();
  $('#time').text(moment().format("dddd h:mm:ss a"));
  $('#alarm').submit(function(event){
    event.preventDefault();
    var alarm = $('#alarm-time').val();
      $('#confirm').show();
      $('#alarm-confirm').text(alarm);
    });

    if (clock.setOffAlarm(alarm)) {
      $('.container').css('background-color', 'red');
    };
  });

},{"./../js/clock.js":1}]},{},[2]);
