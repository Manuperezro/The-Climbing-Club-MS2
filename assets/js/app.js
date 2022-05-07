// Get the Weather APP  Made it following the guides and tutorial of the OPENWEATHER API.
// Also qith help of 2 youtube tutorials : 1 Shanji Rajai ,  2 Steve Griffin  Profesor.

//inst classes//

const weather = new Weather();
const ui = new UI();

const city = document.getElementById("searchUser");
const button = document.getElementById("submit");

button.addEventListener("click", () => {
  let currentVal = city.value;
  let finalVal = currentVal.trim()

  
  if ( finalVal ) {

    // make errors display none

    weather.getCurrent(finalVal)
    .then((data) => {
    console.log("inside fetch")
    //call a UI method//
    ui.populateUI(data);
    //call saveToLS
    ui.saveToLS(data);
    //clear errors
    document.getElementById("error1").style.display="none"
    document.getElementById("error2").style.display="none"
  }).catch(error => { 
    document.getElementById("error2").style.display="block"});

  } else {  

  console.log("errortrigger ", document.getElementById("error1"))
  document.getElementById("error1").style.display="block"

    }
});

//event listener for local storage

window.addEventListener("DOMContentLoaded", () => {
  const dataSaved = ui.getFromLS();
  ui.populateUI(dataSaved);
});