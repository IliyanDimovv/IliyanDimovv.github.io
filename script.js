const numb = document.querySelector(".number");
let counter = 0;
setInterval(() => {
  if (counter == 100) {
    clearInterval();
  } else {
    counter += 1;
    numb.textContent = counter + "%";
  }
}, 80);

function Counter(elem, delay) {
  var value = parseInt(elem.getAttribute("value"), 30);
  var interval;

  var titles = [
    "Calculating number of available licences",
    "There are only 12 licences left…",
    "Less than 10% of all licences are still available on the site",
    "Your licence has successfully been reserved!",
    "Your licence has successfully been reserved!"
  ];

  function updateDisplay(value) {
    elem.innerHTML = value;
  }

  function run() {
    value += 1;
    if (value == titles.length) value = 0;

    elem.setAttribute("value", value);
    updateDisplay(titles[value]);
  }

  function start() {
    interval = window.setInterval(run, delay);
  }

  this.start = start;
}

var elem = document.getElementById("title-switcher");

count = new Counter(elem, 2000);
count.start();

(function () {
  var s = document.getElementById('title-switcher').style,
    f = false,
    c1 = '#000000',
    c2 = '#307e30';

  setInterval(function () {
    s.color = f ? c2 : c1;
    f = !f;
  }, 3000);
})();
