//Function to render multples maps in one html.file.
function initMap() {
    console.log("initMap")
    const map1 = new google.maps.Map(document.getElementById("map1"), {
        zoom: 10,
        center: {
            lat: 36.91354492839833,  
            lng: -4.761574142993195
        }
    });
    
    const map2 = new google.maps.Map(document.getElementById("map2"), {
        zoom: 10,
        center: {
            lat: 37.16980244262552,   
            lng: 22.85739610361743
        }
    });

    const map3 = new google.maps.Map(document.getElementById("map3"), {
        zoom: 10,
        center: {
            lat: -16.290871450010705,
            lng: -71.4056793845691
        }
    });

    const map4 = new google.maps.Map(document.getElementById("map4"), {
        zoom: 10,
        center: {
            lat: 28.786922766307868,
            lng: 83.92050117019593
        }
    });

    const map5 = new google.maps.Map(document.getElementById("map5"), {
        zoom: 10,
        center: {
            lat: 59.919395799600004,
            lng: 10.517719605916644
        }
    });
}



