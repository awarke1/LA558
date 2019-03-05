// Initializing two tile layer variables:

var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
});

var esriWorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

// Intializing and grouping marker layers for cities:

var dsm = L.marker([41.5341, -93.6588]).bindPopup('Des Moines International, IA');
var minneapolis = L.marker([41.7868, -87.7522]).bindPopup('Midway, IL');
var chicago = L.marker([41.9742, -87.9073]).bindPopup('OHARE, IL');
var milwaukee = L.marker([32.8998, -97.0403]).bindPopup('Dallas/Fort Worth, TX');
var madison = L.marker([33.9416, -118.4085]).bindPopup('LAX, CA');
var lincoln = L.marker([44.8848, -93.2223]).bindPopup('Minneapolis/St. Paul International, MN');
var airports = L.layerGroup([DSM, Midway, O'Hare, Dallas, LAX, MSP]);

var map = L.map('map', {
    center: [43.094426, -92.173382],
    zoom: 6,
    layers: [osm, airports]
});

// Adding control to switch baselayers, toggle markers' display:

var baseMaps = {
    "Streets": osm,
    "Satellite": esriWorldImagery
};

var overlayMaps = {
    "Cities": cities
};

L.control.layers(baseMaps, overlayMaps).addTo(map);
