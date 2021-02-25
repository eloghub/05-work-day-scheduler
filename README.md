# work-day-scheduler
Assignment 5: Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.


## Acceptable Criteria DESCRIPTION:

* the current day is displayed at the top of the calendar when the user opens the planner

* the user is presented with timeblocks for standard business hours when the user scrolls down

* each timeblock is color coded to indicate whether it is in the past, present, or future when the user views the timeblocks for that day

* the user can enter an event when they click into a timeblock

* the text for that event is saved in local storage when the user clicks the save button for that timeblock

* the saved events persist when the user refreshes the page


## NOTES/CHALLENGES:

+ (HTML/JS) - displaying the current date was done by creating a function in the javascript file that called the "currentDate" id in the html document and placed a [moment.js format](https://momentjs.com/docs/#/displaying/format/) to display the day of the week, month and date

+ (HTML/CSS) - I created a [grid](https://getbootstrap.com/docs/5.0/layout/grid/) and changed the divs to buttons and textareas that correspond with the css file. I also changed the column widths for the time block, textareas and buttons to be 1, 10 and 1

+ (HTML) - save button icon's i tag was found [here](https://fontawesome.com/icons/save)


### SCREENSHOT:

```md
![#-screenshot](./Assets/#.jpg)
```

### LINK:

* [deployed application](#)