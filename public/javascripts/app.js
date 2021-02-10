const navbar = document.querySelector('#navbar');
const cursor = document.querySelector('#cursor');
const members = document.querySelectorAll('.member');
const shownMember = {
   name: document.querySelector('#shownMemberName'),
   info: document.querySelector('#shownMemberInfo'),
   pic: document.querySelector('#shownMemberPic'),
}


let scroll = 0;
cursor.y = 0;
let e;




const init = () => {
   restoreScroll();
   setUpMembersTiles();
   setUpShownMember();
   setUpSmoothScrollbars();
   setUpCursor();
}



const setUpShownMember = () => {
   shownMember.pic.style.backgroundImage = getComputedStyle(members[8]).backgroundImage;
   shownMember.name.innerText = data[`member${9}`].name;
   shownMember.info.innerText = data[`member${9}`].info;
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
   const membersContainer = document.getElementById("members");

   const options = {
      damping: 0.11,
      // renderByPixels: !('ontouchstart' in document),
      renderByPixels: true,
      syncCallbacks: true,
      alwaysShowTracks: true
   };

   Scrollbar.use(OverscrollPlugin);
   const overscrollOptions = {
      enable: true,
      effect: navigator.userAgent.match(/Android/) ? 'glow' : 'bounce',
      damping: 0,
      maxOverscroll: navigator.userAgent.match(/Android/) ? 150 : 100,
      glowColor: mainElem.dataset.glowColor,
   };


   const bodyScrollbar = Scrollbar.init(mainElem, {
      ...options,
      delegateTo: document,
      plugins: {
         overscroll: { ...overscrollOptions },
      },
   })
   setUpScrollListener(bodyScrollbar);
   setUpLinks(bodyScrollbar);


   overscrollOptions.damping = 0.11;
   const membersScrollbar = Scrollbar.init(membersContainer, {
      ...options,
      delegateTo: membersContainer
   })


}

const setUpLinks = (scrollbar) => {
   const links = document.querySelectorAll('a');
   for (let link of links) {
      if (!link.classList.contains('not-scroll')) {
         link.addEventListener('click', (e) => {
            e.preventDefault();
            let offsetTop = 0;
            link.getAttribute('href') === '#gabinet' ? offsetTop = 100 : null;
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

const setUpScrollListener = (scrollbar) => {
   scrollbar.addListener(() => {
      scroll = scrollbar.offset.y;
      if (!cursor.removed) {
         cursor.y = scroll;
         cursor.style.setProperty('--mtop', e.clientY + cursor.y - 22.5 + 'px');
      }
      navbar.style.top = scroll + 'px';

      if ((scroll >= 700) && !navbar.classList.contains('solid-nav')) {
         navbar.classList.add('solid-nav');
         console.log('added solid-nav')
      } else if ((scroll < 700) && navbar.classList.contains('solid-nav')) {
         navbar.classList.remove('solid-nav');
         console.log('removed solid-nav')
      }
   });
}

const setUpCursor = () => {
   if (!isMobile()) {
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
   } else {
      cursor.removed = true;
      cursor.remove();
   }
}

const isMobile = () => {
   return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

const easyMode = () => {
   Scrollbar.destroyAll()
}

init();