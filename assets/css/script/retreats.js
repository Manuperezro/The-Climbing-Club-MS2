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
        { lat: 40.785091, lng: -73.968285 },
        { lat: 41.084045, lng: -73.874245 },
        { lat: 40.754932, lng: -73.984016 },  
        { lat: 50.45487, lng: -4.06066 }
    ];
    
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
        });
    });
    
    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
    }

// import { MarkerClusterer } from "@googlemaps/markerclusterer";

// function initMap() {
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 10,
//     center: { lat: 36.92958476555766, lng: -4.798181557169018  },
//   });
//   const infoWindow = new google.maps.InfoWindow({
//     content: "",
//     disableAutoPan: true,
//   });
//   // Create an array of alphabetical characters used to label the markers.
//   const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   // Add some markers to the map.
//   const markers = locations.map((position, i) => {
//     const label = labels[i % labels.length];
//     const marker = new google.maps.Marker({
//       position,
//       label,
//     });

//     // markers can only be keyboard focusable when they have click listeners
//     // open info window when marker is clicked
//     marker.addListener("click", () => {
//       infoWindow.setContent(label);
//       infoWindow.open(map, marker);
//     });
//     return marker;
//   });

//   // Add a marker clusterer to manage the markers.
//   new MarkerClusterer({ markers, map });
// }

// const locations = [
//     { lat: 36.93019907628941, lng: -4.798308033519096 },
//     { lat: 36.93308065490375, lng: -4.803693908635756 }, 
//     { lat: 36.93097093838573, lng: -4.8045736730970425 },
//     { lat: 36.928964080678476, lng:  -4.8010546152518945 }
// ];
 