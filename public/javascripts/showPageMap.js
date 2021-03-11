mapboxgl.accessToken = API_KEY;


const map = new mapboxgl.Map({
   container: 'map',
   style: 'mapbox://styles/mapbox/outdoors-v11', // stylesheet location
   center: [21.2132904, 52.1622951],
   zoom: 17 // starting zoom
});


new mapboxgl.Marker()
   .setLngLat([21.2132904, 52.1622951])
   // .setPopup(
   //    new mapboxgl.Popup({ closeOnClick: false, closeButton: false, closeOnMove: false, focusAfterOpen: true, offset: 35, maxWidth: 'none' })
   //       .setHTML(
   //          `<h3>Stomatologia Ortodentica</h3> <p> - Kędzierzyńska 9, Warszawa</p>`
   //       )
   // )
   .addTo(map)

new mapboxgl.Popup({ closeOnClick: false, closeButton: false, closeOnMove: false, focusAfterOpen: false, offset: 35, maxWidth: 'none' })
   .setLngLat([21.2132904, 52.1622951])
   .setHTML('<h3>Stomatologia Ortodentica</h3> <p> - Kędzierzyńska 9, Warszawa</p>')
   .addTo(map);

map.addControl(new mapboxgl.NavigationControl(), 'top-left');
map.scrollZoom.disable();