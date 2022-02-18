function retreatButton(element){ 

    //get name for the button 
    const name = element.value; 
    
    let marker;

    var locations = [
        { name: "crag", zoom: 10, latlng: {lat: 36.91739,lng: -4.77294 }},   
        { name: "crag", zoom: 10, latlng: {lat: 36.93145991404489, lng: -4.801257372414595 }},  
        { name: "crag", zoom: 10, latlng: {lat:  36.89268587354349, lng:  -4.807523013393964}},  
        { name: "crag", zoom: 10, latlng: {lat: 36.90682524054259,lng:  -4.749072315457934 }}, 
        { name: "crag", zoom: 10, latlng: {lat: 36.92988188676995, lng: -4.74632573347915}},
        { name: "crag", zoom: 10, latlng: {lat:  36.91753097893374,lng: -4.744780781116084}},     
        { name: "hotel", zoom: 10, latlng:{lat: 36.910064471231,lng:  -4.760221912241495 }},  
        { name: "hikingRoutes", zoom: 10, latlng:{lat: 36.91143523524193, lng:  -4.7670860779893065 }}, 
        { name: "hikingRoutes", zoom: 10, latlng:{lat: 36.89210916395455, lng:  -4.807769202726911 }},  
        { name: "hikingRoutes", zoom: 10, latlng:{lat:36.92038549128048,  lng:  -4.801503562587809 }}, 
        { name: "NaturalBeauty", zoom: 10, latlng:{lat: 36.90287673699665, lng:  -4.781405222022504 }}, 
        { name: "NaturalBeauty", zoom: 10, latlng:{lat: 36.900827832742124, lng:  -4.768882908643823 }},     
      ];

      //set a default  
    const defaultInfo = [{ name: "Hiking Routes", zoom: 15, latlng:{lat: 36.91143523524193, lng:  -4.7670860779893065 }}] 
    let retreatInfo = locations.filter( location => location.name === name);
    console.log(retreatInfo[0].zoom);

    if (retreatInfo.length === 0) {
        retreatInfo = defaultInfo;
      };


    var map = new google.maps.Map(document.getElementById("map"), {
        zoom : retreatInfo[0].zoom,
        center: {
            lat: 36.92958476555766,
            lng: -4.798181557169018  
        }

    });

    for( let i = 0; i < retreatInfo.length; i++) { 
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




// mp = 37.16980244262552, 22.85739610361743
// var locationsGreek = [
//     { name: "crag", latlng: {lat: 37.17287462941503,lng: 22.887769249235532 }},   
//     { name: "crag", latlng: {lat: 37.16506692556323,lng: 22.818880918798524 }},   
//     { name: "crag", latlng: {lat: 37.16566754660826,lng:  22.75436405693169}},  
//     { name: "crag", latlng: {lat: 37.56087404277187,lng: 22.819343958934386}},     
//     { name: "hotel", latlng:{lat: 37.159060450799764,lng:  22.88626184561542 }},   
//     { name: "hikingRoutes", latlng:{lat: 37.16843034304713, lng:  22.860485249653262 }},  
//     { name: "NaturalBeauty", latlng:{lat: 37.174916511335134, lng:  22.851290089259166 }},   
//   ];



//    mp = -16.290871450010705, -71.4056793845691
//   var locationsPeru = [
//     { name: "crag", latlng: {lat: -16.388113036290935, lng:  -71.27080188943918 }},   
//     { name: "crag", latlng: {lat: -16.39928794217976, lng: -71.41693728086297}},    
//     { name: "crag", latlng: {lat: 28.738620363991107, lng:    84.0348954111163}},  
//     { name: "hotel", latlng: {lat: -16.393710534369276, lng:  -71.53742591963123 }},  
//     { name: "hikingRoutes", latlng:{lat: -16.230726856813842, lng:  -71.53669614960485}},  
//     { name: "NaturalBeauty", latlng:{lat: -16.18885822222622, lng:  -71.51918668977211}},   
//   ];


//   mp = 28.786922766307868, 83.92050117019593
//   var locationsNepal = [
//     { name: "crag", latlng: {lat: 28.78114053902363, lng:  83.92204668568226}},  
//     { name: "crag", latlng: {lat: 28.79618499151483, lng: 83.93783952044461}},     
//     { name: "crag", latlng: {lat: 28.73963315904686, lng:   84.03476655643166}},   
//     { name: "hotel", latlng: {lat: 28.815423791423, lng:   83.86197386150093 }},  
//     { name: "hikingRoutes", latlng:{lat: 28.74060478295787, lng:  83.78350587748338}},  
//     { name: "NaturalBeauty", latlng:{lat: 28.830027019835306,lng:   83.81716158636742 }},   
//   ];


//   mp = 28.786922766307868, 83.92050117019593
//   var locationsNorway = [
//     { name: "crag", latlng: {lat: 59.98244695542777, lng:  10.520848275933988}},   
//     { name: "crag", latlng: {lat: 59.97236556821375, lng: 10.883530532187534}},      
//     { name: "crag", latlng: {lat: 59.94578594235233, lng:   10.756165668016884}},   
//     { name: "hotel", latlng: {lat: 59.91793331459882, lng:   10.749166611150736}},   
//     { name: "hikingRoutes", latlng:{lat: -59.97368857293088,lng:   10.725933489076304}},  
//     { name: "NaturalBeauty", latlng:{lat: 59.89136649798418,lng:    10.595417840257966 }},   
//   ];