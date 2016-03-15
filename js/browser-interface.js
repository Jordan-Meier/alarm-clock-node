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
