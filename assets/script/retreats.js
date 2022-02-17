function initMap() {
    console.log("initMap")
    let map1 = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: {
            lat: 36.92958476555766,
            lng: -4.798181557169018  
        }
    });
    
    let map2 = new google.maps.Map(document.getElementById("map2"), {
        zoom: 12,
        center: {
            lat: 36.92958476555766,
            lng: -4.798181557169018  
        }
    });
};

