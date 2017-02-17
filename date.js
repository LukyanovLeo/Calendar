var date = new Date();

var NAMES_OF_MONTHS = ["Январь", "Февраль", "Март",
					   "Апрель", "Май", "Июнь",
					   "Июль", "Август", "Сентябрь",
					   "Октябрь", "Ноябрь", "Декабрь"];
					   
var nameOfCurrentMonth = NAMES_OF_MONTHS[date.getMonth()];
var currentYear = date.getFullYear();
var currentMonth = date.getMonth();

function getNumberInWeek(){
	var curDate = new Date(currentYear, currentMonth, 1);
	var trueNumber = curDate.getDay();
	if (curDate.getDay() === 0){ trueNumber = 7; }
	return trueNumber - 1;
}
function getLastDayInMonth(){
	var nextMonth = new Date(currentYear, currentMonth + 1, 0);
	return nextMonth.getDate();
}
function getCurrentDay(){
	return date.getDate();
}