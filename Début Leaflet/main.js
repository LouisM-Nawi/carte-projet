window.onload = init; 

function init(){
    
    const mapElement = document.getElementById("mapid")

    

    const mymap = L.map(mapElement, {
        center: [59.9399, 30.3243],
        zoom: 12,
        minZoom: 11.50,
        ZoonSnap: 0.25,
        zoomDelta: 0.25,
    
        layers:[
           L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' , ext: "png"
           }) 
        ]
    })

    const floodimage = './Data/flood_1824.jpg'
    const floodimageBounds = [[60.00197942217718, 30.21399021148682],[59.876210422695024, 30.426442623138428]];
    const floodimageOverlay = L.imageOverlay(floodimage, floodimageBounds)

    const overlayerLayers = {
        "Carte de l'inondation de 1824": floodimageOverlay
    }

    const layerControl = L.control.layers({}, overlayerLayers, {
        collapsed: false,
        position: "topright"
    }). addTo(mymap)

    mymap.on('click', function(e){
        console.log(e.latlng)
    })

    const kazanMarker = L.marker ([59.91698897851315, 30.270574092864994], {
        title: "Port Galernaya",
        opacity: 1.0
    }).addTo(mymap)

    const kazanMarkerToolTip = kazanMarker.bindTooltip("Port Galernaya").openTooltip();

    
}