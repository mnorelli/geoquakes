// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
var $quakesList;
var map;
var template;


$(function(){

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

});

