// Get the Weather APP  Made it following the guides and tutorial of the OPENWEATHER API.
// Also qith help of 2 youtube tutorials : 1 Shanji Rajai ,  2 Steve Griffin  Profesor.

//inst classes//

const fetc = new Fetch();
const ui = new UI();

//add event listeners//

const city = document.getElementById("searchUser");
const button = document.getElementById("submit");
button.addEventListener("click", () => {
  const currentVal = city.value;

  fetc.getCurrent(currentVal).then((data) => {
    //call a UI method//
    ui.populateUI(data);
    //call saveToLS
    ui.saveToLS(data);
  });
});

//event listener for local storage

window.addEventListener("DOMContentLoaded", () => {
  const dataSaved = ui.getFromLS();
  ui.populateUI(dataSaved);
});