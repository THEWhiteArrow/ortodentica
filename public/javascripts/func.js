const navbar = document.querySelector('#navbar');
const navbarCollapse = document.querySelector('#navbarNavAltMarkup');
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCheckbox = document.querySelector('.navbar-checkbox');

const links = document.querySelectorAll('a');
const mapa = document.querySelector('#map');
const ads = document.querySelector('#ads');
const welcomeImg = document.querySelector('#welcome-img');
const cursor = document.querySelector('#cursor');




// cursor.y = 0;
let isMapAlreadyActivated = false;
let e, breakPoint = welcomeImg.offsetHeight - 456, scroll = 0;

let defaultOffsetTop = 40;

const init = () => {
   // DELETE ALL THE HASHES
   document.location.hash = '';


   restoreScroll();

   if (!isMobile()) {
      setUpSmoothScrollbars();
      console.log('mouse device');
   } else {
      setUpScrollListener(document);
      scrollOnQuery(window);
      setUpLinks(window);
      console.log('touch device');
   }

   // AFTER INITIALIZED PAGE DELETE URL PARAMS
   hideURLParams();
   mapa.addEventListener('click', initMap);
}


const scrollOnQuery = (scrollbar) => {
   const urlParam = window.location.href;

   if (!isMobile()) {

      setTimeout(() => {
         if (urlParam.indexOf('q=aktualnosci') !== -1) {
            scrollbar.scrollIntoView(document.querySelector('#aktualnosci'), {
               offsetTop: defaultOffsetTop,
               alignToTop: true,
            });
         } else if (urlParam.indexOf('q=o-nas') !== -1) {
            scrollbar.scrollIntoView(document.querySelector('#content'), {
               offsetTop: defaultOffsetTop,
               alignToTop: true,
            });
         } else if (urlParam.indexOf('q=mapa') !== -1) {
            scrollbar.scrollIntoView(document.querySelector('#mapa'), {
               offsetTop: defaultOffsetTop,
               alignToTop: true,
            });
         } else if (urlParam.indexOf('q=kontakt') !== -1) {
            scrollbar.scrollIntoView(document.querySelector('#kontakt'), {
               offsetTop: defaultOffsetTop,
               alignToTop: true,
            });
         }
      }, 500);
   } else {
      setTimeout(() => {
         if (urlParam.indexOf('q=aktualnosci') !== -1) {
            scrollbar.scroll(0, document.querySelector('#aktualnosci').offsetTop - defaultOffsetTop);
         } else if (urlParam.indexOf('q=o-nas') !== -1) {
            scrollbar.scroll(0, document.querySelector('#content').offsetTop - defaultOffsetTop);
         } else if (urlParam.indexOf('q=mapa') !== -1) {
            scrollbar.scroll(0, document.querySelector('#mapa').offsetTop - defaultOffsetTop);
         } else if (urlParam.indexOf('q=kontakt') !== -1) {
            scrollbar.scroll(0, document.querySelector('#kontakt').offsetTop - defaultOffsetTop);
         }
      }, 500);
   }
}

const getURLParameter = (name) => {
   return decodeURI((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [, null])[1]);
}

const hideURLParams = () => {
   //Parameters to hide (ie ?success=value, ?error=value, etc)
   const hide = ['success', 'error'];
   for (let h in hide) {
      if (getURLParameter(h)) {
         history.replaceState(null, document.getElementsByTagName("title")[0].innerHTML, window.location.pathname);
      }
   }
}

const setUpSmoothScrollbars = () => {
   const mainElem = document.getElementById("scroll-container");

   const options = {
      damping: 0.12,
      // renderByPixels: !('ontouchstart' in document),
      renderByPixels: true,
      syncCallbacks: true,
      alwaysShowTracks: true
   };




   const bodyScrollbar = Scrollbar.init(mainElem, {
      ...options,
      delegateTo: document.body,
   })

   setUpScrollListener(bodyScrollbar);
   setUpLinks(bodyScrollbar);
   scrollOnQuery(bodyScrollbar);

}

const setUpLinks = (scrollbar) => {
   navbarToggler.addEventListener('click', () => {
      scroll < breakPoint ? navbar.classList.toggle('solid-nav') : null;
   });


   for (let link of links) {

      if (!link.classList.contains('not-scroll')) {

         link.addEventListener('click', (e) => {
            e.preventDefault();
            navbarCollapse.classList.remove('show');
            if (scrollbar !== window) {
               scrollbar.scrollIntoView(document.querySelector(link.getAttribute('href')), {
                  offsetTop: defaultOffsetTop,
                  alignToTop: true,
               });
            } else {
               const href = link.getAttribute('href');
               scrollbar.scroll(0, document.querySelector(`${href}`).offsetTop - defaultOffsetTop);
            }
         })

      }
   }
}

const restoreScroll = () => {
   // This prevents the page from scrolling down to where it was previously.
   if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
   }
   // This is needed if the user scrolls down during page load and you want to make sure the page is scrolled to the top once it's fully loaded. This has Cross-browser support.
   window.scrollTo(0, 0);
}

const checkForNavbarChangePoints = (scrollOffset) => {
   breakPoint = welcomeImg.offsetHeight - 456;
   // console.log(scrollOffset);
   if ((scrollOffset >= breakPoint) && !navbar.classList.contains('solid-nav')) {
      navbar.classList.add('solid-nav');
      ads.style.opacity = "1";
      // navbar.style.opacity = "1";

   } else if ((scrollOffset < breakPoint) && navbar.classList.contains('solid-nav')) {
      ads.style.opacity = "0";
      // navbar.style.opacity = "1";
      navbar.classList.remove('solid-nav');
   }

}

const initMap = () => {
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

const setUpScrollListener = (scrollbar) => {

   if (scrollbar === document) {

      document.addEventListener('scroll', () => {
         scroll = this.scrollY;
         checkForNavbarChangePoints(scroll);
      });

   } else {
      console.log("custom scrollbar");
      scrollbar.addListener(() => {
         scroll = scrollbar.offset.y;
         // navbar.style.top = `${scroll}px`;
         // navbar.style.transform = `translate3d(0,${scroll + navbar.offsetHeight * 15}px,0)`;
         ads.style.transform = `translate3d(0,${scroll - ads.offsetHeight * 1.5}px,0)`;
         checkForNavbarChangePoints(scroll);
      });
   }
   // ads.style.opacity = "1";
   // navbar.style.opacity = "1 !important";
}



const isMobile = () => {
   return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

const lowPerformanceMode = () => {
   Scrollbar.destroyAll();
}

