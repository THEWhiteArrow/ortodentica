const navbar = document.querySelector('#navbar');
const cursor = document.querySelector('#cursor');
const members = document.querySelectorAll('.member');
const shownMember = {
   name: document.querySelector('#shownMemberName'),
   info: document.querySelector('#shownMemberInfo'),
   pic: document.querySelector('#shownMemberPic'),
}





const init = () => {
   setUpMembersTiles();
   setUpShownMember();
   setUpScrollListener();
   setUpCursor();
}

const setUpShownMember = () => {
   shownMember.pic.style.backgroundImage = members[8].style.backgroundImage;
   shownMember.name.innerText = data[`member${9}`].name;
   shownMember.info.innerText = data[`member${9}`].info;
}

const setUpMembersTiles = () => {
   members.forEach((member, i) => {
      member.style.backgroundImage = `url("./public/assets/team/${i + 1}-min.jpg")`;
      member.addEventListener('click', () => {

         shownMember.pic.style.backgroundImage = member.style.backgroundImage;
         shownMember.pic.style.backgroundPositionX = getComputedStyle(member).backgroundPositionX;
         shownMember.pic.style.backgroundPositionY = getComputedStyle(member).backgroundPositionY;

         shownMember.name.innerText = data[`member${i + 1}`].name;
         shownMember.info.innerText = data[`member${i + 1}`].info;

      })
   })
}

const setUpScrollListener = () => {
   document.addEventListener("scroll", () => {
      const scroll = this.scrollY;
      const viewHeight = this.innerHeight;

      if ((scroll >= viewHeight && scroll >= 700) && !navbar.classList.contains('solid-nav')) {
         navbar.classList.add('solid-nav');
         console.log('added solid-nav')
      } else if ((scroll < viewHeight && scroll < 700) && navbar.classList.contains('solid-nav')) {
         navbar.classList.remove('solid-nav');
         console.log('removed solid-nav')
      }
   });
}

const setUpCursor = () => {
   if (!isMobile()) {
      document.addEventListener('mousemove', () => {
         let e = window.event;

         cursor.style.setProperty('--mtop', e.clientY - cursor.offsetHeight / 2 + 'px');
         cursor.style.setProperty('--mleft', e.clientX - cursor.offsetWidth / 2 + 'px');
      });

      document.addEventListener('mousedown', () => {
         cursor.classList.add('mouse-down');
      });

      document.addEventListener('mouseup', () => {
         cursor.classList.remove('mouse-down');
      });
   }
}

const isMobile = () => {
   return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}



init();