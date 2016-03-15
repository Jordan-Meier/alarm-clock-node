var Clock = require('./../js/clock.js').Clock;

$(document).ready(function(){
  var alarm = null;
  $('#confirm').hide();
  $('#alarm-sounding').hide();

    //show clock
  setInterval(function() {
    $('#time').text(moment().format("dddd hh:mm:ss a"));
  }, 1000);

  $('#alarm').submit(function(event){
    event.preventDefault();

    //get alarm and show it
    alarm = $('#alarm-time').val();
    console.log(alarm);
    $('#confirm').show();
    $('#alarm-confirm').text(alarm);
    $('#set-alarm-div').hide();
  });
     function setOffAlarm() {
      //  console.log(moment().format("hh:mm a"));
      //  console.log(alarm);
       if (alarm) {
         if (moment().format("HH:mm") === alarm) {
           $('#alarm-sounding').show();
           alarm = null;
         }
         else{
           console.log("not time yet");
         }
       }
       else{
         console.log("alarm not set");
       }

     }
     setInterval(setOffAlarm, 2000);
});
