class Fetch {
  async getCurrent(input) {
    const myKey = "cafa79d3ecd466d1aa8ed88778ab568c";

    //make request to url

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${myKey}`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
};
