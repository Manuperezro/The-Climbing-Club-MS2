// Get the Weather APP  Made it following the guides and tutorial of the OPENWEATHER API.
// Also qith help of 2 youtube tutorials : 1 Shanji Rajai ,  2 Steve Griffin  Profesor.

//inst classes//

const fetc = new Fetch();
const ui = new UI();

const city = document.getElementById("searchUser");
const button = document.getElementById("submit");

button.addEventListener("click", () => {
  let currentVal = city.value;
  let finalVal = currentVal.trim()

  if ( !finalVal || finalVal == ""  || finalVal == null || finalVal == undefined) {
      return alert(" the location can no be empty, Please insert the name of a city")
  } else {  
    fetc.getCurrent(finalVal)
      .then((data) => {
      //call a UI method//
      ui.populateUI(data);
      //call saveToLS
      ui.saveToLS(data);
    }).catch(error => window.alert("The name of the City should be writen in English"));
  }
});

//event listener for local storage

window.addEventListener("DOMContentLoaded", () => {
  const dataSaved = ui.getFromLS();
  ui.populateUI(dataSaved);
});