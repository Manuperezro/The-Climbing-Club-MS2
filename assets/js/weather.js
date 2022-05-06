class Weather {
  async getCurrent(input) {
    const myKey = "cafa79d3ecd466d1aa8ed88778ab568c";

    console.log("getCurrent")

    //make request to url
    
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${myKey}`
      );

      console.log("after Response")
      const data = await response.json();

      console.log("afterData")

        return data;
      
      // console.log("endofFunction")
    }

    catch(e) {
      // catch error
      console.log("error-e", e)
    }
  }
}
