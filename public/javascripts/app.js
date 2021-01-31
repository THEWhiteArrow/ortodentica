const navbar = document.querySelector('#navbar');
const cursor = document.querySelector('#cursor');
const members = document.querySelectorAll('.member');
const shownMember = {
   name: document.querySelector('#shownMemberName'),
   info: document.querySelector('#shownMemberInfo'),
   pic: document.querySelector('#shownMemberPic'),
}
const data = {
   member1: {
      name: 'M Orczykowska',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nihil in aperiam assumenda ad et, aut corrupti doloremque nostrum ipsum magni, iure rem fugiat ipsam, eum nemo saepe. Natus, quisquam!'
   },
   member2: {
      name: 'S Przybysz',
      info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatibus maiores, vitae consequatur suscipit labore consequuntur iusto reprehenderit sed aspernatur optio. Excepturi exercitationem nemo, tempora eum dolores provident aspernatur molestiae!'
   },
   member3: {
      name: 'A Przybysz',
      info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor odit fuga alias mollitia perferendis illum rem debitis, voluptates nisi beatae eius eum ipsam doloribus qui eveniet totam deleniti, fugiat explicabo.'
   },
   member4: {
      name: 'A Kozłowski',
      info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis amet molestiae, temporibus ut tenetur magni quod similique quia et perferendis excepturi quas ea quasi repudiandae illo harum neque. Maiores, commodi.'
   },
   member5: {
      name: 'A Szefer',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut velit suscipit ea? Totam officiis omnis esse tempora libero adipisci, quia sapiente. Nihil, sed tenetur quas vero obcaecati nostrum! Ducimus, cupiditate?'
   },
   member6: {
      name: 'D Stanaszek',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque totam qui iste nihil cum explicabo dolore doloremque minima soluta. Praesentium iure nesciunt adipisci accusamus, provident esse distinctio! A, totam facilis.'
   },
   member7: {
      name: 'I Sierpińska',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora debitis dolorum eveniet beatae aliquid possimus, quis dolores pariatur recusandae quam, eligendi architecto! Nihil et sunt qui doloremque modi rerum!'
   },
   member8: {
      name: 'K Mąkowska',
      info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A molestiae voluptates sapiente incidunt nobis perspiciatis reprehenderit non omnis dicta maxime. Provident, quidem? Aliquid sapiente necessitatibus incidunt nesciunt! Ad, omnis eum.'
   },
   member9: {
      name: 'M Bodalska',
      info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam veniam repellendus magni id, nam labore sapiente eligendi, non a ratione incidunt! Deleniti cupiditate et officia aut aperiam eos ullam numquam!'
   },
   member10: {
      name: 'M Dowrakowska',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta modi amet mollitia? In cumque necessitatibus reprehenderit, rem error soluta quo suscipit sapiente natus cupiditate ipsum perspiciatis ab possimus nam unde!'
   },
   member11: {
      name: 'P Ziarek',
      info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, officia sint est voluptatem libero assumenda dicta commodi magni maxime distinctio quas expedita voluptas omnis eligendi labore cumque rerum perspiciatis doloribus.'
   },
   member12: {
      name: 'T Podlaski',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, ea fugiat. Sequi nulla fugiat deserunt tempore aperiam voluptatum laboriosam quia assumenda obcaecati rerum, exercitationem sapiente qui. Tempore ad totam quo!'
   },
   member13: {
      name: 'U Olszak',
      info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quasi ea eveniet tempora itaque? Vel, libero hic qui deleniti eos minus necessitatibus quis a culpa, dolorum rem. Aliquid, nihil molestias.'
   },
}

   // Example starter JavaScript for disabling form submissions if there are invalid fields
   (function () {
      'use strict'

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.querySelectorAll('.needs-validation')

      // Loop over them and prevent submission
      Array.prototype.slice.call(forms)
         .forEach(function (form) {
            form.addEventListener('submit', function (event) {
               if (!form.checkValidity()) {
                  event.preventDefault()
                  event.stopPropagation()
               }
               form.classList.add('was-validated')
            }, false)
         })
   })()



const init = () => {
   setUpMembersTiles();
   setUpShownMember();
   setUpScrollListener();
   // setUpCursor();
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