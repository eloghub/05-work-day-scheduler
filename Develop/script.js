var hourContainers = $("time-block");

$(document).ready(function(){
  //displays current day in the header
  $("#currentDay").text(moment().format("dddd, MMMM Do"))
    //
  hourContainers.each(function(){
    console.log($(this).attr("data-hour"));
    // console.log(hourContainers[0].attr("id"))
  });
});

//function to change color of timeblocks according to what time it is
// if (moment() < $(".hour")){
//   then 
// }

