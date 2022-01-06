let date = new Date();

function getPeriod() {
  if (date.getHours() < 9 || (date.getHours() == 9 && date.getMinutes() <= 30)) {
    return 1;
  } else if (date.getHours() < 10 || (date.getHours() == 10 && date.getMinutes() <= 20)) {
    return 2;
  } else if (date.getHours() < 11 || (date.getHours() == 11 && date.getMinutes() <= 10)) {
    return 3;
  } else if (date.getHours() < 12) {
    return 4;
  } else if (date.getHours() < 13 || (date.getHours() == 13 && date.getMinutes() <= 20)) {
    return 5; 
  } else if (date.getHours() < 14 || (date.getHours() == 14 && date.getMinutes() <= 10)) {
    return 6;
  } else if (date.getHours() < 15) {
    return 7;
  } else {
    return 0; // No Class
  }
}

function joinClass(period) {
  let url = localStorage.getItem(period);
  if (url !== null) {
    if (!/http/.test(url)) window.location.href = "https://" + url;
    else window.location.href = url;
  } else {
    alert("You haven't set a URL for this class yet!");
  }
}

function update() {
  let period = getPeriod();
  let button = document.getElementById("joinClass");
  if (period) {
    button.innerText = "Join Period " + period;
    button.setAttribute("onclick", "joinClass(" + period + ")");
  } else {
    button.innerText = "No Classes To Join";
    button.setAttribute("onclick", "alert('No Classes To Join Right Now!')");
  }
}

update();

setInterval(function() { update() }, 500);