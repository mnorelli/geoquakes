// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
var $quakesList;
var map;
var template;



$(function(){

  var lat = 37.782591
  var lon = -122.453249
  var mapDOM = document.getElementById('map')

  function initMap(){
    map = new google.maps.Map(mapDOM, {
      center: {lat: lat, lng: lon},
      zoom: 4
    })

  var marker =  new google.maps.Marker({
    map: map,
    title: "Hello!",
    animation: google.maps.Animation.DROP,
    position: {lat: 34.156660, lng: -118.429627}
  })
  }

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

   initMap();




});

