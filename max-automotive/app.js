
/* 
===========================
google maps api
===========================
*/


let map;


var stylesArray =[
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
]

function initMap() {
  const homeLatLong = { lat: 40.4929413, lng: -79.7777683 };
  const centerLatLong = { lat: 40.4926701, lng: -79.7853507}
  map = new google.maps.Map(document.getElementById("map"), {
    center: centerLatLong,
    zoom: 16,
    styles: stylesArray
  });
  new google.maps.Marker({
    position: homeLatLong,
    map,
    title: "Max Automotive",
  })
}

//,



