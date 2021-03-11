mapboxgl.accessToken = API_KEY;

const map = new mapboxgl.Map({
   container: 'map',
   style: 'mapbox://styles/mapbox/outdoors-v11', // stylesheet location
   center: [21.2132904, 52.1622951],
   zoom: 16 // starting zoom
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
map.scrollZoom.setWheelZoomRate(0.01); // Default 1/450

map.on("wheel", event => {
   if (event.originalEvent.ctrlKey) { // Check if CTRL key is pressed
      event.originalEvent.preventDefault(); // Prevent chrome/firefox default behavior
      if (!map.scrollZoom._enabled) map.scrollZoom.enable(); // Enable zoom only if it's disabled
   } else {
      if (map.scrollZoom._enabled) map.scrollZoom.disable(); // Disable zoom only if it's enabled
   }
});


const mapElement = document.querySelector('#map');

const checkForDrag = (e) => {
   console.log(e.touches)
   if (e.touches.length === 1) {
      map.dragPan.disable();

      mapElement.style.setProperty('--opacity', '1');

   } else {
      e.preventDefault();
      e.stopPropagation();
      map.dragPan.enable();
      map.scrollZoom.disable();
      map.dragRotate.disable();
      mapElement.style.setProperty('--opacity', '0');
   }
}

const touchStopped = (e) => {
   if (e.touches.length === 0 || e.touches.length === 2) {
      mapElement.style.setProperty('--opacity', '0');
      // map.scrollZoom.enable();
   }
}


if (isMobile() || 1) {
   mapElement.addEventListener('touchstart', checkForDrag);
   mapElement.addEventListener('touchend', touchStopped);
}