//data for or the locations to get the markers in the maps
const locations = [{
    country: "Spain",
    name: "crag",
    zoom: 10,
    latlng: {
        lat: 36.91739,
        lng: -4.77294
    }
},
{
    country: "Spain",
    name: "crag",
    zoom: 10,
    latlng: {
        lat: 36.93145991404489,
        lng: -4.801257372414595
    }
},
{
    country: "Spain",
    name: "crag",
    zoom: 10,
    latlng: {
        lat: 36.89268587354349,
        lng: -4.807523013393964
    }
},
{
    country: "Spain",
    name: "crag",
    zoom: 10,
    latlng: {
        lat: 36.90682524054259,
        lng: -4.749072315457934
    }
},
{
    country: "Spain",
    name: "crag",
    zoom: 10,
    latlng: {
        lat: 36.92988188676995,
        lng: -4.74632573347915
    }
},
{
    country: "Spain",
    name: "crag",
    zoom: 10,
    latlng: {
        lat: 36.91753097893374,
        lng: -4.744780781116084
    }
},
{
    country: "Spain",
    name: "hotel",
    zoom: 10,
    latlng: {
        lat: 36.910064471231,
        lng: -4.760221912241495
    }
},
{
    country: "Spain",
    name: "hikingRoutes",
    zoom: 10,
    latlng: {
        lat: 36.91143523524193,
        lng: -4.7670860779893065
    }
},
{
    country: "Spain",
    name: "hikingRoutes",
    zoom: 10,
    latlng: {
        lat: 36.89210916395455,
        lng: -4.807769202726911
    }
},
{
    country: "Spain",
    name: "hikingRoutes",
    zoom: 10,
    latlng: {
        lat: 36.92038549128048,
        lng: -4.801503562587809
    }
},
{
    country: "Spain",
    name: "NaturalBeauty",
    zoom: 10,
    latlng: {
        lat: 36.90287673699665,
        lng: -4.781405222022504
    }
},
{
    country: "Spain",
    name: "NaturalBeauty",
    zoom: 10,
    latlng: {
        lat: 36.900827832742124,
        lng: -4.768882908643823
    }
},
{
    country: "Greek",
    name: "crag",
    zoom: 10,
    latlng: {
        lat: 37.17287462941503,
        lng: 22.887769249235532
    }
},
{
    country: "Greek",
    name: "crag",
    zoom: 10,
    latlng: {
        lat: 37.16506692556323,
        lng: 22.818880918798524
    }
},
{
    country: "Greek",
    name: "crag",
    zoom: 10,
    latlng: {
        lat: 37.16566754660826,
        lng: 22.75436405693169
    }
},
{
    country: "Greek",
    name: "crag",
    zoom: 10,
    latlng: {
        lat: 37.56087404277187,
        lng: 22.819343958934386
    }
},
{
    country: "Greek",
    name: "hotel",
    zoom: 10,
    latlng: {
        lat: 37.159060450799764,
        lng: 22.88626184561542
    }
},
{
    country: "Greek",
    name: "hikingRoutes",
    zoom: 10,
    latlng: {
        lat: 37.16843034304713,
        lng: 22.860485249653262
    }
},
{
    country: "Greek",
    name: "NaturalBeauty",
    zoom: 10,
    latlng: {
        lat: 37.174916511335134,
        lng: 22.851290089259166
    }
},
{
    country: "Peru",
    name: "crag",
    zoom: 10,
    latlng: {
        lat: -16.388113036290935,
        lng: -71.27080188943918
    }
},
{
    country: "Peru",
    name: "crag",
    zoom: 10,
    latlng: {
        lat: -16.39928794217976,
        lng: -71.41693728086297
    }
},
{
    country: "Peru",
    name: "crag",
    zoom: 10,
    latlng: {
        lat: 28.738620363991107,
        lng: 84.0348954111163
    }
},
{
    country: "Peru",
    name: "hotel",
    zoom: 10,
    latlng: {
        lat: -16.393710534369276,
        lng: -71.53742591963123
    }
},
{
    country: "Peru",
    name: "hikingRoutes",
    zoom: 10,
    latlng: {
        lat: -16.230726856813842,
        lng: -71.53669614960485
    }
},
{
    country: "Peru",
    name: "NaturalBeauty",
    zoom: 10,
    latlng: {
        lat: -16.18885822222622,
        lng: -71.51918668977211
    }
},
{
    country: "Peru",
    name: "crag",
    zoom: 10,
    latlng: {
        lat: 28.78114053902363,
        lng: 83.92204668568226
    }
},
{
    country: "Nepal",
    name: "crag",
    zoom: 10,
    latlng: {
        lat: 28.79618499151483,
        lng: 83.93783952044461
    }
},
{
    country: "Nepal",
    name: "crag",
    zoom: 10,
    latlng: {
        lat: 28.73963315904686,
        lng: 84.03476655643166
    }
},
{
    country: "Nepal",
    name: "hotel",
    zoom: 10,
    latlng: {
        lat: 28.815423791423,
        lng: 83.86197386150093
    }
},
{
    country: "Nepal",
    name: "hikingRoutes",
    zoom: 10,
    latlng: {
        lat: 28.74060478295787,
        lng: 83.78350587748338
    }
},
{
    country: "Nepal",
    name: "NaturalBeauty",
    zoom: 10,
    latlng: {
        lat: 28.830027019835306,
        lng: 83.81716158636742
    }
},
{
    country: "Norway",
    name: "crag",
    zoom: 10,
    latlng: {
        lat: 59.98244695542777,
        lng: 10.520848275933988
    }
},
{
    country: "Norway",
    name: "crag",
    zoom: 10,
    latlng: {
        lat: 59.97236556821375,
        lng: 10.883530532187534
    }
},
{
    country: "Norway",
    name: "crag",
    zoom: 10,
    latlng: {
        lat: 59.94578594235233,
        lng: 10.756165668016884
    }
},
{
    country: "Norway",
    name: "hotel",
    zoom: 10,
    latlng: {
        lat: 59.91793331459882,
        lng: 10.749166611150736
    }
},
{
    country: "Norway",
    name: "hikingRoutes",
    zoom: 10,
    latlng: {
        lat: -59.97368857293088,
        lng: 10.725933489076304
    }
},
{
    country: "Norway",
    name: "NaturalBeauty",
    zoom: 10,
    latlng: {
        lat: 59.89136649798418,
        lng: 10.595417840257966
    }
},
];

//data for or the locations to get the Center in the Countries in the maps
const countries = [{
    id:'map1',
    name: "Spain",
    latlng: {
        lat: 36.92958476555766,
        lng: -4.798181557169018
    }
},
{   id:'map2',
    name: "Greek",
    latlng: {
        lat: 37.16980244262552,
        lng: 22.85739610361743
    }
},
{   id:'map3',
    name: "Peru",
    latlng: {
        lat: -16.290871450010705,
        lng: -71.40567938456913
    }
},
{   id:'map4',
    name: "Nepal",
    latlng: {
        lat: 28.786922766307868,
        lng: 83.92050117019593
    }
},
{   id:'map5',
    name: "Norway",
    latlng: {
        lat: 59.919395799600004,
        lng: 10.517719605916644
    }
},
];


//function to click the buttons and shows differents Markers

function retreatButton(element, country, poi) {
    //get name for the button 
    const name = poi;
    const countryName = country;

    let marker;

    // find the country with the same name pass in 
    const filteredCountry = countries.filter(country => country.name === countryName);

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
  
   console.log("RetreatInfo",retreatInfo);


    //set the center of the map 
    let map = new google.maps.Map(document.getElementById(filteredCountry[0].id), {
        zoom: retreatInfo[0].zoom,
        center: filteredCountry[0].latlng,

    });


    //show different Markers 
    for (let i = 0; i < retreatInfo.length; i++) {
        marker = new google.maps.Marker({
            position: retreatInfo[i].latlng,
            map,
            title: name
        });

        // To add the marker to the map, call setMap();
        marker.setMap(map);

    }

};