var hourContainers = $(".time-block");

$(document).ready(function(){
  //displays current day in the header
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
    //
  hourContainers.each(function(){
    console.log($(this).attr("data-hour"));
  });

  // if ($(".data-hour").value === (moment().hour()){
  // $(this).children("textarea").addClass("present");
  // });

//end of document function
});

//allows save button to store
// localStorage.setItem()