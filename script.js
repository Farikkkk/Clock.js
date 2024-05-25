const body = document.querySelector("body");
const hourHand = document.querySelector(".hour");
const minHand = document.querySelector(".min");
const secHand = document.querySelector(".sec");
const modeSwitch = document.querySelector(".mode-switch");

if (localStorage.getItem("mode") === "Dark Mode") {
  body.classList.add("dark");
  modeSwitch.textContent = "Light Mode";
}

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");

  modeSwitch.textContent = isDark ? "Light Mode" : "Dark Mode";
  localStorage.setItem("mode", isDark ? "Dark Mode" : "Light Mode");
});

function updateTime() {
  let date = new Date();
  secToDeg = (date.getSeconds() / 60) * 360;
  minToDeg = (date.getMinutes() / 60) * 360;
  hourToDeg = (date.getHours() / 12) * 360;

  secHand.style.transform = `rotate(${secToDeg}deg)`;
  minHand.style.transform = `rotate(${minToDeg}deg)`;
  hourHand.style.transform = `rotate(${hourToDeg}deg)`;
}

setInterval(updateTime, 1000);
updateTime();
