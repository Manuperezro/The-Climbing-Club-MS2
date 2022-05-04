// Get the Weather APP  Made it following the guides and tutorial of the OPENWEATHER API.
// Also with help of 2 youtube tutorials : 1 Shanji Rajai ,  2 Steve Griffin  Profesor.

class UI {
    constructor() {
      this.uiContainer = document.getElementById("content");
      this.city;
      this.defaultCity = "Bristol";
    }
  
    populateUI(data) {
      //de-structure vars

      //Html to load to the page with the weather Information 
      this.uiContainer.innerHTML = `
          
          <div class="card mx-auto mt-5" style="width: 18rem;">
              <div class="card-body2 justify-content-center">
                  <h5 class="card-title">${data.name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Highs of ${data.main.temp_max}°C.</h6>
                  <h6 class="card-subtitle mb-2 text-muted">Lows of ${data.main.temp_min}°C</h6>
                  <h6 class="card-subtitle mb-2 text-muted">Winds: Speed ${data.wind.speed}mh.</h6>
                  <h6 class="card-subtitle mb-2 text-muted">Visibility : ${data.visibility}km</h6>
                  <p class="card-text ">Weather conditions are described as: ${data.weather[0].description}</p>
                  
              </div>
          </div>
          
          
          `;
    }
  
  
    clearUI() {
      uiContainer.innerHTML = "";
    }
  
    saveToLS(data) {
      localStorage.setItem("city", JSON.stringify(data));
    }

    getFromLS() { 

      if (localStorage.getItem("city")) {
        this.city = Json.parse(localStorage.getItem("city"));
        } else { 
          return this.defaultCity;
        
      }
    }
  

    clearLS() {
      localStorage.clear();
    }
  }