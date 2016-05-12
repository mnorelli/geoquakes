// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
var $quakesList;
var map;
var template;



$(function(){

  var lat = 37.782591
  var lon = -122.453249
  var mapDOM = document.getElementById('map')

  $quakesList = $('#info');

  var source   = $("#quake-template").html();
  template = Handlebars.compile(source);

  $.get(weekly_quakes_endpoint)
   .done(function(data) {
      earthquakes = data.features;
      $quakesList.append(template({quakes: earthquakes}));
    }
    )

   .fail(function(error){
    console.log("problem: "+error)
   })

  function initMap(){
    map = new google.maps.Map(mapDOM, {
      center: {lat: lat, lng: lon},
      zoom: 4
    })

    var image = {
      url: 'http://labs.google.com/ridefinder/images/mm_20_red.png',
      // url: 'http://google-maps-icons.googlecode.com/files/teal01.png',
      // This marker is 20 pixels wide by 32 pixels high.
      // size: new google.maps.Size(20, 32),
      // The origin for this image is (0, 0).
      // origin: new google.maps.Point(0, 0),
      // The anchor for this image is the base of the flagpole at (0, 32).
      // anchor: new google.maps.Point(0, 32)
    };

    var marker =  new google.maps.Marker({
      map: map,
      icon: image,
      title: "Hello!",
      animation: google.maps.Animation.DROP,
      position: {lat: 34.156660, lng: -118.429627}
    })
    }
//
  initMap();




});

