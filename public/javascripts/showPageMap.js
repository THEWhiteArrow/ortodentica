mapboxgl.accessToken = API_KEY;


const map = new mapboxgl.Map({
   container: 'map',
   style: 'mapbox://styles/mapbox/outdoors-v11', // stylesheet location
   center: [21.2132904, 52.1622951],
   zoom: 17 // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());

new mapboxgl.Marker()
   .setLngLat([21.2132904, 52.1622951])
   // .setPopup(
   //    new mapboxgl.Popup({ offset: 25 })
   //       .setHTML(
   //          `<h3>OrtoDentica Stomatologia</h3>`
   //       )
   // )
   .addTo(map)

new mapboxgl.Popup({ closeOnClick: false, closeButton: false, closeOnMove: false, focusAfterOpen: false, offset: 35, maxWisth: 'none' })
   .setLngLat([21.2132904, 52.1622951])
   .setHTML('<h3>Stomatologia Ortodentica</h3> <p> - Kędzierzyńska 9, Warszawa</p>')
   .addTo(map);