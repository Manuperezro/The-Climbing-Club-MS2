class Fetch {
  async getCurrent(input) {
    const myKey = "cafa79d3ecd466d1aa8ed88778ab568c";

    //make request to url

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}


// //fetch data from openweather API

// button.addEventListener('click', function(name){
//   fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputText.value+'&appid=cafa79d3ecd466d1aa8ed88778ab568c')
// .then(response => response.json())
// .then(data => {
//   var tempValue = data['main']['temp'];
//   var nameValue = data['name'];
//   var descValue = data['weather'][0]['description'];

//   main.innerHTML = nameValue;
//   desc.innerHTML = "Desc - "+descValue;
//   temp.innerHTML = "Temp - "+tempValue;
//   input.value ="";

// })
// // Error Alert 
// .catch(err => alert("Wrong city name!"));
// })