var Clock = require('./../js/clock.js').Clock;
// var moment = require('moment');


$(document).ready(function(){
  var clock = new Clock(moment().format("dddd h:mm:ss a"));
  console.log(clock.time);
  $('#confirm').hide();
  setInterval(function() {
    $('#time').text(moment().format("dddd h:mm:ss a"));
  }, 1000);
  $('#alarm').submit(function(event){
    event.preventDefault();
    var alarm = $('#alarm-time').val();
      $('#confirm').show();
      $('#alarm-confirm').text(alarm);
    });

    if (clock.time === alarm) {
      $('.container').css('background-color', 'red');
    };
  });
