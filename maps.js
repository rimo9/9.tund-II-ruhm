(function(){
    "use strict";

    var MapsApp = function(){

        if(MapsApp.instance){
            return MapsApp.instance;
        }
        MapsApp.instance = this;

        this.container = null;
        this.map = null;

        this.init();
    };

    window.MapsApp = MapsApp;

    MapsApp.prototype = {

        init: function(){

            console.log('MapsApp started');

            this.container = document.querySelector('#map-container');

            var options = {
              center: {lat: 59.439252, lng: 24.7721997},
              zoom: 6,
              styles: [ { "elementType": "labels.text", "stylers": [ { "visibility": "off" } ] },{ "featureType": "water", "stylers": [ { "hue": "#ff5e00" } ] },{ "featureType": "road.highway", "stylers": [ { "hue": "#ff001a" } ] } ],
				      streetViewControl: false,
				      mapTypeControl: false
            };

            this.map = new google.maps.Map(this.container, options);

            this.map.addListener('click', function(e){
              console.log(e.latLng.lat());
              MapsApp.instance.createMarker(e.latLng.lat(), e.latLng.lng());
            });

        },
        createMarker: function(newLat, newLng){
          var markerOptions = {
            map: this.map,
            position: {lat: newLat, lng: newLng},
            animation: google.maps.Animation.DROP
          };
          var newMarker = new google.maps.Marker(markerOptions);

          var infoOption = {
            content: "<strong>Tere</strong>"
          };
          var infoWindow = new google.maps.InfoWindow(infoOption);

          //seone infowindow markeriga
          infoWindow.open(this.map, newMarker);
        }
    };

    window.onload = function(){
        var app = new MapsApp();
    };

})();
