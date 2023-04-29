let marker = "";
let map = "";
async function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: { lat: 24.340426217012137, lng: 54.5343818870348 },
    streetViewControl: false,
  });
  // 24.340379947351643, 54.534696558395055;
  marker = new google.maps.Marker({
    position: { lat: 24.34041248980433, lng: 54.534240861973046 },
    icon: "../images/icon_marker.svg",
    map,
  });

  map.addListener("zoom_changed", function (event) {
    marker.setMap(null);
    switch (map.getZoom()) {
      case 17:
        {
          marker = new google.maps.Marker({
            position: { lat: 24.340473379605356, lng: 54.534223203124064 },
            icon: "../images/icon_marker.svg",
            map,
          });
        }
        break;
      case 19:
        {
          marker = new google.maps.Marker({
            position: { lat: 24.340389252402634, lng: 54.53423197477317 },
            icon: "../images/icon_marker.svg",
            map,
          });
        }
        break;

      case 20:
        {
          marker = new google.maps.Marker({
            position: { lat: 24.340402033612865, lng: 54.534236236818664 },
            icon: "../images/icon_marker.svg",
            map,
          });
        }
        break;

      case 21:
        {
          marker = new google.maps.Marker({
            position: { lat: 24.340396535073722, lng: 54.53423724265299 },
            icon: "../images/icon_marker.svg",
            map,
          });
        }
        break;
      case 22:
        {
          marker = new google.maps.Marker({
            position: { lat: 24.340397146022514, lng: 54.53423724265299 },
            icon: "../images/icon_marker.svg",
            map,
          });
        }
        break;
      default: {
        marker = new google.maps.Marker({
          position: { lat: 24.34041248980433, lng: 54.534240861973046 },
          icon: "../images/icon_marker.svg",
          map,
        });
      }
    }
  });
}

window.initMap = initMap;
