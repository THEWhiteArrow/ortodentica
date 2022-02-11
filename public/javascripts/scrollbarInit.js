const navbar = document.querySelector('#navbar');
const navbarCollapse = document.querySelector('#navbarNavAltMarkup');
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCheckbox = document.querySelector('.navbar-checkbox');

const links = document.querySelectorAll('a');
const ads = document.querySelector('#ads');
const welcomeImg = document.querySelector('#welcome-img');


let e, breakPoint, scroll = 0;
if (welcomeImg)
   breakPoint = welcomeImg.offsetHeight - 456;
else
   breakPoint = 0;

let defaultOffsetTop = 40;

const initScroll = () => {

   restoreScroll();

   if (!isMobile()) {
      setUpSmoothScrollbars();
      console.log('mouse device');
   } else {
      setUpScrollListener(document);
      setUpLinks(window);
      scrollOnQuery(window);
      console.log('touch device');
   }
   // DELETE ALL THE HASHES
   document.location.hash = '';
   hideURLParams();
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
      damping: 0.15,
      // renderByPixels: !('ontouchstart' in document),
      renderByPixels: true,
      syncCallbacks: false,
      alwaysShowTracks: true
   };


   const bodyScrollbar = Scrollbar.init(mainElem, {
      ...options,
      delegateTo: document,
   })
   setUpScrollListener(bodyScrollbar);
   setUpLinks(bodyScrollbar);
   scrollOnQuery(bodyScrollbar);

}
const checkForNavbarChangePoints = (scrollOffset) => {
   // console.log(scrollOffset);
   if ((scrollOffset >= breakPoint) && !navbar.classList.contains('solid-nav')) {
      ads.style.opacity = "1";
      navbar.classList.add('solid-nav');

   } else if ((scrollOffset < breakPoint) && navbar.classList.contains('solid-nav')) {
      ads.style.opacity = "0";
      navbar.classList.remove('solid-nav');
   }

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

const setUpScrollListener = (scrollbar) => {

   if (scrollbar === document) {

      document.addEventListener('scroll', () => {
         scroll = this.scrollY;
         checkForNavbarChangePoints(scroll);
      });

   } else {
      // console.log("custom scrollbar");
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

const setUpLinks = (scrollbar) => {
   const links = document.querySelectorAll('a');
   for (let link of links) {
      if (!link.classList.contains('not-scroll')) {
         link.addEventListener('click', (e) => {
            e.preventDefault();
            let offsetTop = 0;
            link.getAttribute('href') === '#o-nas' ? offsetTop = 100 : null;
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

const isMobile = () => {
   return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

const lowPerformanceMode = () => {
   Scrollbar.destroyAll();
}

if (typeof (autoStartScroll) === 'undefined') {
   initScroll();
   console.log('automatically started SmoothScroll')
}