today = new Date();
var date = new Date(today.getFullYear(), 05, 4);
var one_day = 1000*60*60*24;

document.querySelector("#days").innerHTML = "" + Math.ceil((date.getTime()-today.getTime())/(one_day))
