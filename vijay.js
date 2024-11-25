// Get a reference to the element
var parentDiv = document.querySelector(".containerbody");
var counter = 0;
var currentColor = "";
var seriesIds = 1;
var currentId = "";
var currentNumber = 1;
var pos = 0;
parentDiv.addEventListener("click", () => {
  const pumpbody = parentDiv.querySelector(".pumpbody");
  pumpbody.classList.add("blow");
  const pumptop = parentDiv.querySelector(".pumptop");
  pumptop.classList.add("blow");
  const pumpside = parentDiv.querySelector(".pumpside");
  pumpside.classList.add("blow");
  const baloons = [
    "pink",
    "blue",
    "green",
    "red",
    "purple",
    "skyblue",
    "yellow",
    "maroon",
  ];
  const baloonPaths = {
    pink: "pink baloon.png",
    blue: "blue.png",
    green: "green baloon.png",
    red: "red.png",
    purple: "purple.png",
    skyblue: "skyblue.png",
    yellow: "yellow baloon.png",
    maroon: "maroon.png",
  };
  const threads = "thread.png";

  const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26,
  ];
  const numberspath = {
    1: "Symbol 10001.png",
    2: "Symbol 10002.png",
    3: "Symbol 10003.png",
    4: "Symbol 10004.png",
    5: "Symbol 10005.png",
    6: "Symbol 10006.png",
    7: "Symbol 10007.png",
    8: "Symbol 10008.png",
    9: "Symbol 10009.png",
    10: "Symbol 10010.png",
    11: "Symbol 10011.png",
    12: "Symbol 10012.png",
    13: "Symbol 10013.png",
    14: "Symbol 10014.png",
    15: "Symbol 10015.png",
    16: "Symbol 10016.png",
    17: "Symbol 10017.png",
    18: "Symbol 10018.png",
    19: "Symbol 10019.png",
    20: "Symbol 10020.png",
    21: "Symbol 10021.png",
    22: "Symbol 10022.png",
    23: "Symbol 10023.png",
    24: "Symbol 10024.png",
    25: "Symbol 10025.png",
    26: "Symbol 10026.png",
  };

  if (counter < 3) {
    if (counter == 0) {
      const randomColor = getRandomString(baloons);
      currentColor = randomColor;
      currentId = currentColor + "_" + seriesIds++;
      const baloonCont = document.getElementById("containerbaloon");

      const containerbodybaloon = document.createElement("div");
      containerbodybaloon.setAttribute("class", "containerbodybaloon");
      containerbodybaloon.setAttribute("id", "body" + currentId);
      baloonCont.appendChild(containerbodybaloon);

      const baloon = document.createElement("img");
      baloon.setAttribute("src", baloonPaths[currentColor]);
      baloon.setAttribute("class", "baloon");
      baloon.setAttribute("id", currentId);
      containerbodybaloon.appendChild(baloon);

      // aplhabet img code
      const number = document.createElement("img");
      number.setAttribute("src", numberspath[currentNumber]);
      number.setAttribute("class", "number");
      number.setAttribute("id", "number" + currentId);
      containerbodybaloon.appendChild(number);
      currentNumber++;
    }

    blowBaloon("body" + currentId);
    counter++;
  } else {
    const containerbodybaloonPrev = document.getElementById("body" + currentId);
    containerbodybaloonPrev.style.animation =
      "move_y 30s linear forwards, oscil1 4s infinite";
    blastBaloon("body" + currentId);

    counter = 0;
    const baloonCont = document.getElementById("containerbaloon");

    const randomColor = getRandomString(baloons);
    currentColor = randomColor;
    currentId = currentColor + "_" + seriesIds++;

    const containerbodybaloon = document.createElement("div");
    containerbodybaloon.setAttribute("class", "containerbodybaloon");
    containerbodybaloon.setAttribute("id", "body" + currentId);
    baloonCont.appendChild(containerbodybaloon);

    const baloon = document.createElement("img");
    baloon.setAttribute("src", baloonPaths[currentColor]);
    baloon.setAttribute("class", "baloon");
    baloon.setAttribute("id", currentId);
    containerbodybaloon.appendChild(baloon);

    // aplhabet code
    const number = document.createElement("img");
    number.setAttribute("src", numberspath[currentNumber]);
    number.setAttribute("class", "number");
    number.setAttribute("id", "number" + currentId);
    containerbodybaloon.appendChild(number);
    currentNumber++;

    blowBaloon("body" + currentId);
    counter++;
    setTimeout(() => {
      pumpbody.classList.remove("blow");
      pumptop.classList.remove("blow");
      pumpside.classList.remove("blow");
    }, 250);

    return;
  }

  setTimeout(() => {
    pumpbody.classList.remove("blow");
    pumptop.classList.remove("blow");
    pumpside.classList.remove("blow");
  }, 250);
});

function frame() {
  if (pos == 350) {
    clearInterval(id);
  } else {
    pos++;
    ballonmove.style.left = pos + "px";
    ballonmove.style.right = pos + "px";
  }
}

function blastBaloon(baloonBodyContId) {
  // ballon blast code
  document
    .getElementById(baloonBodyContId)
    .addEventListener("click", function () {
      const childDiv = document.getElementById(baloonBodyContId);
      childDiv.classList.add("explode");
      setTimeout(() => {
        childDiv.remove();
      }, 500);
    });
}

function blowBaloon(colorId) {
  const containerbodybaloon = document.getElementById(colorId);
  const rect = containerbodybaloon.getBoundingClientRect();
  containerbodybaloon.hidden = false;
  containerbodybaloon.style.height = rect.height + 30 + "px";
  containerbodybaloon.style.width = rect.width + 30 + "px";
}

function getRandomString(arr) {
  // Get a random index value
  const randomIndex = Math.floor(Math.random() * arr.length);
  // Get the random string from the array
  return arr[randomIndex];
}
