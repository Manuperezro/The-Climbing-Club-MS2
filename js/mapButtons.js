const { locations, countries } = require('../assets/data/retreatData.js');

//function to click the buttons and shows differents Markers

function retreatButton(element, country, poi) {
    console.log("El", element, country, poi);
    //get name for the button 
    const name = poi;
    const countryName = country;
console.log("Locations", locations, countries)

    let marker;

    // find the country with the same name pass in 
    const filteredCountry = countries.filter(country => country.name === countryName);
    console.log("M", filteredCountry);

    // set a default  
    const defaultInfo = [{
        name: "Hiking Routes",
        zoom: 15,
        latlng: {
            lat: 36.91143523524193,
            lng: -4.7670860779893065
        }
    }]
    let retreatInfo = locations.filter(location => location.name === name && location.country === country);

    if (retreatInfo.length === 0) {
        retreatInfo = defaultInfo;
    };

    console.log(filteredCountry[0].id)


    //set the center of the map 
    let map = new google.maps.Map(document.getElementById("map2"), {
        zoom: retreatInfo[0].zoom,
        center: filteredCountry[0].latlng,

    });



    //show different Markers 
    for (let i = 0; i < retreatInfo.length; i++) {
        console.log(`retreatInfo ${i}`, retreatInfo[i].latlng);
        marker = new google.maps.Marker({
            position: retreatInfo[i].latlng,
            map,
            title: name
        });

        // To add the marker to the map, call setMap();
        marker.setMap(map);

    }

};