var hourContainers = $(".time-block");
var note = $(".time-block").val
var saveButton =$(".saveBtn")

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
saveButton.onclick = saveData;

function saveData(){
  localStorage.setItem("server", note.value);
  var storedValue = localStorage.getItem("server");
};