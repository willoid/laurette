//changing background img

var i = 1;
document.getElementById(
  "landing"
).style.backgroundImage = `url(./indexImages/landing${i}.jpg)`;

var bg = setInterval(() => {
  if (i >= 8) {
    i = 1;
    document.getElementById(
      "landing"
    ).style.backgroundImage = `url(./indexImages/landing${i}.jpg)`;
    clearInterval(bg);
  } else {
    i++;
    document.getElementById(
      "landing"
    ).style.backgroundImage = `url(./indexImages/landing${i}.jpg)`;
    clearInterval(bg);
  }
}, 5000);
