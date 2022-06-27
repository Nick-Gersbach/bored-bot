const boredBot = document.getElementById("bored-bot");

boredBot.addEventListener("click", GenerateActivity);

function GenerateActivity() {
  //Fetch Random Activity from bored bot api
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById("idea").textContent = data.activity;
    });
}
