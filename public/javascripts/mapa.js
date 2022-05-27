const mapa = document.querySelector('#map');


const init = () => {
   mapa.addEventListener('click', initMap);
}


const initMap = () => {
   let isMapAlreadyActivated = false;
   const loadDiv = document.querySelector('.load-div');
   loadDiv.style.display = "flex";
   loadDiv.style.opacity = "1";
   mapboxgl.accessToken = API_KEY;

   const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/outdoors-v11', // stylesheet location
      center: [21.2123197, 52.1619951],
      zoom: 16.5 // starting zoom
   });


   const marker = new mapboxgl.Marker()
      .setLngLat([21.2123197, 52.1619951])
      // .setPopup(
      //    new mapboxgl.Popup({ closeOnClick: false, closeButton: false, closeOnMove: false, focusAfterOpen: true, offset: 35, maxWidth: 'none' })
      //       .setHTML(`<h3>Stomatologia Ortodentica</h3> <p> - Kędzierzyńska 9, Warszawa</p>`)
      // )
      .addTo(map)

   new mapboxgl.Popup({ closeOnClick: false, closeButton: false, closeOnMove: false, focusAfterOpen: false, offset: 35, maxWidth: 'none' })
      .setLngLat([21.2123197, 52.1619951])
      // .setHTML('<h3>Stomatologia Ortodentica</h3> <p> - Kędzierzyńska 9, Warszawa</p>');
      .setHTML('<img src="./public/assets/ortodentica/ortodentica-logo.png" width="240" alt="Gabinet OrtoDentica Logo"></img>')
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
   isMapAlreadyActivated = true;
   console.log('map is being activated');

   const setMarkerColor = (marker, color) => {
      let markerElement = marker.getElement();
      markerElement
         .querySelectorAll('svg g[fill="' + marker._color + '"]')[0]
         .setAttribute("fill", color);
      marker._color = color;
   }

   setMarkerColor(marker, '#9D3C31');

   mapa.removeEventListener('click', initMap);
   // mapa.style.backgroundImage = 'none';
   mapa.classList.add('map-activated');

   let checkLoading = true;
   map.on('sourcedata', function (e) {
      if (e.isSourceLoaded && checkLoading) {
         checkLoading = false;
         // Do something when the source has finished loading


         loadDiv.style.opacity = '0';
         console.log('map is activated');

         // This removes loading animation elements
         setTimeout(() => {
            mapa.style.backgroundColor = 'rgb(191, 237, 255)';
            mapa.style.backgroundImage = 'none';
            loadDiv.remove();

         }, 500);
      }
   });
   // getComputedStyle(mapa, 'after').display = 'none';
}

init();