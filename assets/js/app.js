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
  console.log("hELLOOOOOOOO!!");
  // Manuel this is John as I still have access to your workspace
  // You need to check if the variable has no value
  // but you also need to guard against the user adding blank spaces
  // you can use the method trim() on the value before you asign it to currentVal
  // link here  https://www.w3schools.com/jsref/jsref_trim_string.asp
  if ( currentVal == ""  || currentVal == null){
      return alert("Please insert the name of a city")
  }
  else{  
    fetc.getCurrent(currentVal)
      .then((data) => {
      //call a UI method//
      ui.populateUI(data);
      //call saveToLS
      ui.saveToLS(data);
    }).catch(error => window.alert("Error in weather"));
  }
});

  


//event listener for local storage

window.addEventListener("DOMContentLoaded", () => {
  const dataSaved = ui.getFromLS();
  ui.populateUI(dataSaved);
});