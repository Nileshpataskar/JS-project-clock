setInterval(myFunction, 1000);
function myFunction() {
  var DateObj = new Date();
  var hour = DateObj.getHours();
  var minute = DateObj.getMinutes();
  var seconds = DateObj.getSeconds();
  var PMAM = "AM";
  var picture = document.getElementById("photo");

  if (hour >= 12) {
    PMAM = "PM";
  }

  if (hour < 10) {
    hour = "0" + hour;
  }

  if (minute < 10) {
    minute = "0" + minute;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (hour >= 1 && hour <= 6) {
    const c = document.getElementsByClassName("text2")[0];
    c.innerHTML = "Good Night";
    const d = document.getElementsByClassName("text1")[0];
    d.innerHTML = "Good Night";
    picture.src = "./images/nightimg.png";
    console.log("Good Night");
  }

  if (hour >= 6 && hour < 11) {
    const c = document.getElementsByClassName("text2")[0];
    c.innerHTML = "Grab Some healthy Breakfast";

    const d = document.getElementsByClassName("text1")[0];
    d.innerHTML = "Good Morning";

    picture.src = "./images/nightimg.png";

    
    console.log("Grab Some healthy ");
  }

  if (hour >= 11 && hour < 15) {
    const c = document.getElementsByClassName("text2")[0];
    c.innerHTML = "Lets have some Lunch";

    const d = document.getElementsByClassName("text1")[0];
    d.innerHTML = "Good Afternoon!!";
    picture.src = "./images/afternoon_img.svg";


    console.log("lunch some healthy");
  }
  if (hour >= 15 && hour < 19) {
    const c = document.getElementsByClassName("text2")[0];
    c.innerHTML = "Stop yawning get some Tea";

    const d = document.getElementsByClassName("text1")[0];
    d.innerHTML = "Good Evening!!";
    picture.src = "./images/lunch_image.png";

    console.log("Tea ");
  }
  if (hour >= 19 && hour < 24) {
    const c = document.getElementsByClassName("text2")[0];
    c.innerHTML = "Close your eyes and go to sleep";
    picture.src = "./images/nightimg.png";

    const d = document.getElementsByClassName("text1")[0];
    d.innerHTML = "Good Night";

    console.log("sleep ");
  }

  document.getElementById("B1").innerHTML = hour;
  document.getElementById("B2").innerHTML = minute;
  document.getElementById("B3").innerHTML = seconds;
  document.getElementById("B4").innerHTML = PMAM;
}

function perform() {
  const myElement = document.getElementById("change");
  console.log(myElement);
  myElement.style.backgroundImage =
    "linear-gradient(to right,#FC5EFF,#CB52F8, #6E54EC)";
}

function setTime() {
  let picture = document.getElementById("photo");
  let two = document.getElementById("two");

  let morning = document.querySelector("#morning");
  let afternoon = document.querySelector("#afternoon");
  let evening = document.querySelector("#evening");
  let night = document.querySelector("#night");

  let wake = morning.options[document.getElementById("morning").selectedIndex];
  let lunch =
    afternoon.options[document.getElementById("afternoon").selectedIndex];
  let even = evening.options[document.getElementById("evening").selectedIndex];
  let one = night.options[document.getElementById("night").selectedIndex];

  let para = document.getElementsByClassName("para");

  para[0].innerHTML = `Wake Up Time: ${wake.innerHTML}`;
  para[1].innerHTML = `Lunch Time: ${lunch.innerHTML}`;
  para[2].innerHTML = `Nap Time: ${even.innerHTML}`;
  para[3].innerHTML = `Night Time: ${one.innerHTML}`;

  let time = new Date();
  let hrs = time.getHours();

  if (hrs === parseInt(morning.value)) {
    two.innerHTML = "GOOD MORNING";
    picture.src = "./";
  } else if (hrs === parseInt(afternoon.value)) {
    two.innerHTML = "GOOD AFTERNOON";
    picture.src = "./";
  } else if (hrs === parseInt(evening.value)) {
    two.innerHTML = "GOOD EVENING";
    picture.src = "./cup.png";
  } else if (hrs === parseInt(night.value)) {
    two.innerHTML = "GOOD NIGHT";
    picture.src = "./goodnight.svg";
  }
}
