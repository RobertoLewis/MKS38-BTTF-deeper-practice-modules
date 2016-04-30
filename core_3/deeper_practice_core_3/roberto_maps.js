
function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2){
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1);
  var a =
     Math.sin(dLat/2) * Math.sin(dLat/2) +
     Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
     Math.sin(dLon/2) * Math.sin(dLon/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg){
  return deg * (Math.PI / 180);
}

function LatLong(){


}

LatLong.prototype.getDistanceFromLatLonInKm = function (lat1,lon1,lat2,lon2){
  var R = 6371; // Radius of the earth in km

  var dLat = deg2rad(lat2-lat1);  // deg2rad below

  var dLon = deg2rad(lon2-lon1);

  var a =
     Math.sin(dLat/2) * Math.sin(dLat/2) +
     Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
     Math.sin(dLon/2) * Math.sin(dLon/2);

  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  var d = R * c; // Distance in km

  return d;
};

LatLong.prototype.deg2rad = function(deg){
  return deg * (Math.PI / 180);
};

function MapPoint(lat, long){

  this.lat = lat;
  this.long = long;

}

MapPoint.prototype = Object.create(LatLong.prototype);


MapPoint.prototype.setLabel = function(label){
  this.label = "[" + label + "]";
};

MapPoint.prototype.distanceFrom = function(otherPoint){

  return this.getDistanceFromLatLonInKm(this.lat, this.long, otherPoint.lat, otherPoint.long)

};

function RouteStartPoint(lat, long){
  this.point = new MapPoint(this, lat, long);
  this.newLabel = "(" + lat + "," + long + ")";
  this.point.setLabel(newLabel);


}

RouteStartPoint.prototype = Object.create(MapPoint.prototype);
RouteStartPoint.prototype.setLabel = function(loc){
  return "Start: " + loc;
};

function RouteEndPoint(lat, long){
  this.point = new MapPoint(this, lat, long);
  this.newLabel = "(" + lat + "," + long + ")";
  this.point.setLabel(newLabel);


}

RouteEndPoint.prototype = Object.create(MapPoint.prototype);
RouteEndPoint.prototype.setLabel = function(loc){
  return "End: " + loc;
};


// MakerSquare SF: (37.7875005,-122.4020974)
// MakerSquare LA: (34.0192691,-118.496533)
// MakerSquare ATX: (30.268995,-97.7428677)

var routeStartSF = new RouteStartPoint(37.7875005,-122.4020974);
var routeEndLA = new RouteEndPoint(34.0192691,-118.496533);
var routeEndATX = new RouteEndPoint(30.268995,-97.7428677);

var SFtoLA = routeEndLA.distanceFrom(routeStartSF);
console.log(routeEndLA.label, SFtoLA);
var SFtoATX = routeEndATX.distanceFrom(routeStartSF);
console.log(routeEndLA.label, SFtoATX);









