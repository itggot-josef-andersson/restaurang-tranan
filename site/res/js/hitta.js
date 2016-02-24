function initMap() {
    var mapDiv = document.getElementById('map');
    var resturantLoc = {lat: 57.6986121, lng: 11.9698574};

    var map = new google.maps.Map(mapDiv, {
      center: resturantLoc,
      zoom: 15
    });

    var marker = new google.maps.Marker({
        position: resturantLoc,
        map: map,
        title: 'Restaurang Tranan'
      });

}
