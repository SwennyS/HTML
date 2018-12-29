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














//////////////////////////              affichage des couches :            //////////////////////////   


/////////////couche iris/////////////
L.geoJSON(iris, {
    style: function(feature) {
        switch (feature.properties.name) {
            case 'tchom': 
         return ;
        }
    }
});

 function getColor(d) {
    return d > 20 ? '#f1eef6' :
           d > 15 ? '#d7b5d8' :
           d > 10 ? '#df65b0' :
           d > 5 ? '#dd1c77' :
           d > 0 ? '#980043' :
                           '#980043' ;       
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.tchom),
        weight: 2,
        opacity: 1,
        color: 'white',
        fillOpacity: 1
    };
}
L.geoJson(iris, {style: style}).addTo(map);


var legend = L.control({position: 'bottomright'});

   legend.onAdd = function (map) {

      var div = L.DomUtil.create('div', 'info legend'),
         grades = [0, 5, 10, 15, 20],
         labels = [' Taux de chomage <br>'],
         from, to;

      for (var i = 0; i < grades.length; i++) {
         from = grades[i];
         to = grades[i + 1];

         labels.push(
            '<i style="background:' + getColor(from + 1) + '"></i> ' +
            from + (to ? '&ndash;' + to : '+'));
      }

      div.innerHTML = labels.join('<br>');
      return div;
   };

legend.addTo(map);

/////////////couche metro /////////////
L.geoJSON(metro).addTo(map);


/////////////couche autopartage/////////////

L.geoJSON(autopartage, {
        pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng).bindTooltip(feature.properties.nom);
        }
}).addTo(map);




//////////////////////////              Animation marker sur les lignes de metro            //////////////////////////   

