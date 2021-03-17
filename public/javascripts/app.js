const navbar = document.querySelector('#navbar');
const ads = document.querySelector('#ads');
const welcomeImg = document.querySelector('#welcome-img');
const cursor = document.querySelector('#cursor');
const members = document.querySelectorAll('.member');
const shownMember = {
   name: document.querySelector('#shownMemberName'),
   info: document.querySelector('#shownMemberInfo'),
   pic: document.querySelector('#shownMemberPic'),
}


// cursor.y = 0;
let e, breakPoint, scroll = 0;

const init = () => {
   // DELETE ALL THE HASHES
   document.location.hash = '';

   // window.onload = hideURLParams;
   // restoreScroll();

   if (!isMobile()) {
      setUpSmoothScrollbars();
      // setUpCursor();
      console.log('mouse device');
   } else {
      setUpScrollListener(document);
      // scrollOnQuery(window);
      // cursor.removed = true;
      // cursor.remove();
      console.log('touch device');
   }

   // AFTER INITIALIZED PAGE DELETE URL PARAMS
   hideURLParams();

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