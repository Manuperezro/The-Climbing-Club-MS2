function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: {
            lat: 36.92958476555766,
            lng: -4.798181557169018  
        }
    });
    
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    var locations = [
      { lat: 36.91143523524193, lng:  -4.7670860779893065 }, 
      { lat: 36.9159644957474,lng: -4.808370637623996 },  
    ];
    
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
        });
    });
    
    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
    }

