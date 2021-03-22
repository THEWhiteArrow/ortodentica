const navbar = document.querySelector('#navbar');
const mapa = document.querySelector('#map');
const ads = document.querySelector('#ads');
const welcomeImg = document.querySelector('#welcome-img');
const cursor = document.querySelector('#cursor');
const members = document.querySelectorAll('.member');
const shownMember = {
   name: document.querySelector('#shownMemberName'),
   info: document.querySelector('#shownMemberInfo'),
   pic: document.querySelector('#shownMemberPic'),
}

let deleteDiv = true;
document.querySelector('#delete').addEventListener('click', () => {
   if (deleteDiv) {
      document.querySelectorAll('div')[22].remove();
      document.querySelector('#mapa').style.backgroundColor = "white";
      document.querySelector('#contact').classList.remove('bg-white');

      document.querySelectorAll('input')[0].style.backgroundColor = '#f7ece2';
      document.querySelectorAll('input')[1].style.backgroundColor = '#f7ece2';
      document.querySelectorAll('input')[2].style.backgroundColor = '#f7ece2';
      document.querySelector('textarea').style.backgroundColor = '#f7ece2';


      deleteDiv = false;
   }
})

// cursor.y = 0;
let isMapAlreadyActivated = false;
let e, breakPoint, scroll = 0;

const init = () => {
   // DELETE ALL THE HASHES
   document.location.hash = '';

   // window.onload = hideURLParams;
   restoreScroll();

   if (!isMobile()) {
      setUpSmoothScrollbars();

      // setUpCursor();
      console.log('mouse device');
   } else {
      setUpScrollListener(document);
      scrollOnQuery(window);
      // cursor.removed = true;
      // cursor.remove();
      console.log('touch device');
   }

   // AFTER INITIALIZED PAGE DELETE URL PARAMS
   hideURLParams();
   mapa.addEventListener('click', initMap);
}


const scrollOnQuery = (scrollbar) => {
   const urlParam = window.location.href;
   console.log('yes')

   if (!isMobile()) {

      setTimeout(() => {
         if (urlParam.indexOf('q=aktualnosci') !== -1) {
            scrollbar.scrollIntoView(document.querySelector('#aktualnosci'));
         } else if (urlParam.indexOf('q=o-nas') !== -1) {
            scrollbar.scrollIntoView(document.querySelector('#o-nas'));
         } else if (urlParam.indexOf('q=mapa') !== -1) {
            scrollbar.scrollIntoView(document.querySelector('#mapa'));
         } else if (urlParam.indexOf('q=contact') !== -1) {
            scrollbar.scrollIntoView(document.querySelector('#contact'));
         }
      }, 500);
   } else {
      setTimeout(() => {
         if (urlParam.indexOf('q=aktualnosci') !== -1) {
            scrollbar.scroll(0, document.querySelector('#aktualnosci').offsetTop + window.innerHeight);
         } else if (urlParam.indexOf('q=o-nas') !== -1) {
            scrollbar.scroll(0, document.querySelector('#o-nas').offsetTop + window.innerHeight);
         } else if (urlParam.indexOf('q=mapa') !== -1) {
            scrollbar.scroll(0, document.querySelector('#mapa').offsetTop + window.innerHeight);
         } else if (urlParam.indexOf('q=contact') !== -1) {
            scrollbar.scroll(0, document.querySelector('#contact').offsetTop + window.innerHeight);
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

const setUpShownMember = () => {
   let n = 0;
   shownMember.pic.style.backgroundImage = getComputedStyle(members[n]).backgroundImage;
   shownMember.name.innerText = data[`member${n + 1}`].name;
   shownMember.info.innerText = data[`member${n + 1}`].info;
}

const setUpMembersTiles = () => {
   members.forEach((member, i) => {
      // member.style.backgroundImage = `url("./public/assets/team/${i + 1}-min.jpg")`;
      member.addEventListener('click', () => {

         shownMember.pic.style.backgroundImage = getComputedStyle(member).backgroundImage;
         // shownMember.pic.style.backgroundPositionX = getComputedStyle(member).backgroundPositionX;
         // shownMember.pic.style.backgroundPositionY = getComputedStyle(member).backgroundPositionY;

         shownMember.name.innerText = data[`member${i + 1}`].name;
         shownMember.info.innerText = data[`member${i + 1}`].info;

      })
   })
}

const setUpSmoothScrollbars = () => {
   const mainElem = document.getElementById("scroll-container");
   // const membersContainer = document.getElementById("members");

   const options = {
      damping: 0.11,
      // renderByPixels: !('ontouchstart' in document),
      renderByPixels: true,
      syncCallbacks: true,
      alwaysShowTracks: true
   };

   // Scrollbar.use(OverscrollPlugin);
   // const overscrollOptions = {
   //    enable: true,
   //    effect: navigator.userAgent.match(/Android/) ? 'glow' : 'bounce',
   //    damping: 0,
   //    maxOverscroll: navigator.userAgent.match(/Android/) ? 150 : 100,
   //    glowColor: mainElem.dataset.glowColor,
   // };


   const bodyScrollbar = Scrollbar.init(mainElem, {
      ...options,
      delegateTo: document,
      // plugins: {
      //    overscroll: { ...overscrollOptions },
      // },
   })

   setUpScrollListener(bodyScrollbar);
   setUpLinks(bodyScrollbar);
   scrollOnQuery(bodyScrollbar);

   // overscrollOptions.damping = 0.11;
   // const membersScrollbar = Scrollbar.init(membersContainer, {
   //    ...options,
   //    delegateTo: membersContainer
   // })

}

const setUpLinks = (scrollbar) => {
   const links = document.querySelectorAll('a');
   for (let link of links) {
      if (!link.classList.contains('not-scroll')) {
         link.addEventListener('click', (e) => {
            e.preventDefault();
            let offsetTop = 0;
            // link.getAttribute('href') === '#o-nas' ? offsetTop = 100 : null;
            scrollbar.scrollIntoView(document.querySelector(link.getAttribute('href')), {
               // offsetLeft: 34,
               offsetTop: offsetTop || 0,
               alignToTop: true,
               // onlyScrollIfNeeded: true,
            });
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
   // breakPoint = welcomeImg.offsetHeight - 56;
   breakPoint = welcomeImg.offsetHeight - 456;
   if ((scrollOffset >= breakPoint) && !navbar.classList.contains('solid-nav')) {
      navbar.classList.add('solid-nav');
      ads.style.opacity = "1";
      // console.log('added solid-nav')
   } else if ((scrollOffset < breakPoint) && navbar.classList.contains('solid-nav')) {
      ads.style.opacity = "0";
      navbar.classList.remove('solid-nav');
      // console.log('removed solid-nav')
   }

   // if (scrollOffset > document.querySelector('#mapContainer').offsetTop - window.innerHeight && isMapAlreadyActivated === false && false) {

   // }

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


   new mapboxgl.Marker()
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
      scrollbar.addListener(() => {
         scroll = scrollbar.offset.y;

         // DELETED CURSOR
         // cursor.y = scroll;
         // cursor.style.setProperty('--mtop', e.clientY + cursor.y - 22.5 + 'px');
         navbar.style.top = scroll + 'px';
         ads.style.transform = ` translate3d(0,${scroll - ads.offsetHeight * 1.3}px,0)`;
         checkForNavbarChangePoints(scroll);
      });
   }
}

const setUpCursor = () => {
   document.addEventListener('mousemove', () => {
      e = window.event;
      cursor.style.setProperty('--mtop', e.clientY + cursor.y - 22.5 + 'px');
      cursor.style.setProperty('--mleft', e.clientX - 22.5 + 'px');

   });

   document.addEventListener('mousedown', () => {
      cursor.classList.add('mouse-down');
   });

   document.addEventListener('mouseup', () => {
      cursor.classList.remove('mouse-down');
   });
}

const isMobile = () => {
   return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

const easyMode = () => {
   Scrollbar.destroyAll();
}

init();