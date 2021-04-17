const navbar = document.querySelector('#navbar');


const initScroll = () => {
   restoreScroll();

   if (!isMobile()) {
      setUpSmoothScrollbars();
      // setUpCursor();
      console.log('mouse device');
   } else {
      // cursor.removed = true;
      // cursor.remove();
      console.log('touch device');
   }
}


const setUpSmoothScrollbars = () => {
   const mainElem = document.getElementById("scroll-container");

   const options = {
      damping: 0.11,
      // renderByPixels: !('ontouchstart' in document),
      renderByPixels: true,
      syncCallbacks: true,
      alwaysShowTracks: true
   };


   const bodyScrollbar = Scrollbar.init(mainElem, {
      ...options,
      delegateTo: document,
   })
   setUpScrollListener(bodyScrollbar);
   setUpLinks(bodyScrollbar);

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

const setUpScrollListener = (scrollbar) => {

   if (scrollbar === document) {
      document.addEventListener('scroll', () => {
         scroll = this.scrollY;
      });
   } else {
      scrollbar.addListener(() => {
         scroll = scrollbar.offset.y;

         navbar.style.top = scroll + 'px';
         ads.style.transform = ` translate3d(0,${scroll - ads.offsetHeight * 1.3}px,0)`;
      });
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

const easyMode = () => {
   Scrollbar.destroyAll();
}

if (typeof (autoStartScroll) === 'undefined') {
   initScroll();
   console.log('autoStarted SmoothScroll')
}