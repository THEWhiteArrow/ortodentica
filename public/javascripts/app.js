const navbar = document.querySelector('#navbar');
const members = document.querySelectorAll('.member');
const shownMember = {
   name: document.querySelector('#shownMemberName'),
   info: document.querySelector('#shownMemberInfo'),
   pic: document.querySelector('#shownMemberPic'),
}



const init = () => {
   setUpShownMember();
   setUpMembersListener();
   setUpScrollListener();
   wakeUpApi();
}

const setUpShownMember = () => {
   shownMember.pic.style.backgroundImage = members[3].style.backgroundImage;
   shownMember.name.innerText = data[`member${1}`].name;
   shownMember.info.innerText = data[`member${1}`].info;
}

const setUpMembersListener = () => {
   members.forEach((member, i) => {
      member.style.backgroundImage = `url("./public/assets/team/${i + 1}.jpg")`;
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
   window.addEventListener("scroll", () => {
      const scroll = this.scrollY;
      const viewHeight = this.innerHeight;

      if ((scroll >= viewHeight || scroll >= 700) && !navbar.classList.contains('solid-nav')) {
         navbar.classList.add('solid-nav');
         console.log('added solid-nav')
      } else if ((scroll < viewHeight || scroll < 700) && navbar.classList.contains('solid-nav')) {
         navbar.classList.remove('solid-nav');
         console.log('removed solid-nav')
      }
   });
}

const wakeUpApi = async () => {
   const res = await axios.get('http://localhost:3000/wakeup');
   console.log(res.data);
}


init();