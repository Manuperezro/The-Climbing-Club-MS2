function retreatButton(name){ 

    var locations = [
        { name: "crag", latlng: {lat: 36.9159644957474,lng: -4.808370637623996 }},  
        { name: "hotel", latlng:{lat: 36.91143523524193, lng:  -4.7670860779893065 }}, 
        { name: "hikingRoutes", latlng:{lat: 36.91143523524193, lng:  -4.7670860779893065 }}, 
        { name: "NaturalBeauty", latlng:{lat: 36.91143523524193, lng:  -4.7670860779893065 }}, 
      ];

    const defaultInfo = [{ name: "Hiking Routes", latlng:{lat: 36.91143523524193, lng:  -4.7670860779893065 }}] 
    const retreatInfo = locations.filter(location => location.name == name ) || defaultInfo ;  
    console.log(retreatInfo);

    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: {
            lat: 36.92958476555766,
            lng: -4.798181557169018  
        }
    });

    var marker = new google.maps.Marker({
        position: retreatInfo[0],
        map,
        title: name
    });
    
    
// To add the marker to the map, call setMap();
marker.setMap(map);

};



