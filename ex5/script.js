var map = L.map('map').setView([41.8781, -87.6298], 8);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([41.8781, -87.6298]).addTo(map)
   .bindPopup("Abbey's Hometown")
   .openPopup();

var cities = [
    [41.9211, 87.6335, "Lincoln Park"],
	[41.8676, 87.6140,"Shedd Aquarium"],
	[41.8826, 87.6226, "Millenium Park"],
	[41.8917, 87.6043, "Navy Pier"],
    [41.8663, 87.6170, "The Field Museum"]
];

for (var i = 0; i < cities.length; i++) {
	marker = new L.marker([cities[i][0],cities[i][1]])
	.bindPopup(cities[i][2])
	.addTo(map);
}

function fullExtent() {
    map.setView([cities[0][0], cities[0][1]], 5);
}

function ames() {
	map.panTo(new L.LatLng(42.028160, -93.649329));
}

function Des Moines() {
	map.panTo(new L.LatLng(41.5868, 93.6250));
}
