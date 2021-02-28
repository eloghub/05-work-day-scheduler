var hourContainers = $(".time-block");

$(document).ready(function(){
  //displays current day in the header
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
    //
  hourContainers.each(function(){
    console.log($(this).attr("data-hour"));

  // if (hourContainers === (moment().hour()){
  // then $("#currentDay").text(moment().format("dddd, MMMM Do")).addClass("present");

  // });
});

//end of document function
});

//allows save button to store
