function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: {lat: 50.420966, lng: 30.531819}
  });

var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Range relaxe hotel</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Range relaxe hotel</b> - a kind person in Kiev. We stop influential politicians, diplomats, famous actors, prominent artists and athletes. To come back to our hotel - a good tradition, because there are always waiting and are happy to welcome guests. We were easily accessible from anywhere in the city, and if you want to explore the capital closer or are planning a business meeting, all convenient for you means of transport are concentrated here.</p>' +
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
  marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: 50.420966, lng: 30.531819}
  });
  marker.addListener('click',function() {
    infowindow.open(map, marker);
    toggleBounce();
  });
}


