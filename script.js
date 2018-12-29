var map = L.map('map');

//Fond de carte affiché : 

var osmUrl = 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib = 'Map data @ OpenstreetMap contributors';
var osm = new L.TileLayer(osmUrl, { attributuion: osmAttrib }).addTo(map);
map.setView([45.7, 4.95], 7);

/*
fonds de cartes possibles : 

var osmUrl='http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg';
var osmUrl='http://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png';
var osmUrl='http://mt0.google.com/vt/lyrs=p&hl=ja&x={x}&y={y}&z={z}';
var osmUrl='https://heatmap-external-b.strava.com/tiles/all/bluered/{z}/{x}/{y}.png';
var osmUrl='http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg';
*/
drawnItems = L.featureGroup().addTo(map);
L.control.layers({
        'osm': osm.addTo(map),
        "google": L.tileLayer('http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}', {
            attribution: 'google'
        })
    }, { 'Dessiner une ligne': drawnItems }, { position: 'topleft', collapsed: false }).addTo(map);









Olivier, tu vois le changement? 




grgrgre





//////////////////////////              affichage des couches :            //////////////////////////   

/////////////couche autopartage/////////////

L.geoJSON(autopartage, {
        pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng).bindTooltip(feature.properties.nom);
        }
}).addTo(map);

/////////////couche iris/////////////

L.geoJSON(iris).addTo(map);


/////////////couche metro /////////////
L.geoJSON(metro).addTo(map);


/////////////couche metro /////////////



//////////////////////////              Animation marker sur les lignes de metro            //////////////////////////   

