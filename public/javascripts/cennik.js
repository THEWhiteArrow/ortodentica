const cennik = {
   Ortodoncja: {
      'Konsultacja ortodontyczna PROMOCJA': '50 PLN',
      'Konsultacja w trakcie leczenia aparatami stałymi': '100 PLN',
      'Powtórna konsultacja ortodontyczna': '80 PLN',
      'Wyciski': '120 PLN',
      'Plan leczenia': '200 PLN',
      'Aparat ruchomy płytka Schwarza': '650 PLN',
      'Aktywator': '800 PLN',
      'Wizyta kontrolna z aparatem ruchomym': '100 PLN',
      'Aparat stały metalowy (jeden łuk) PROMOCJA': '1600 PLN',
      'Aparat stały metalowy bezniklowy (jeden łuk)': '1800 PLN',
      'Wizyta kontrolna z aparatem stałym metalowym (jeden łuk)': '200 PLN',
      'Wizyta kontrolna z aparatem stałym metalowym (dwa łuki)': '230 PLN',
      'Aparat stały samoligaturujący': '2300 PLN',
      'Wizyta kontrolna z aparatem samoligaturującym (jeden łuk)': '200 PLN',
      'Wizyta kontrolna z aparatem samoligaturującym (dwa łuki)': '260 PLN',
      'Aparat stały kryształowy – estetyczny PROMOCJA': '2500 PLN',
      'Wizyta kontrolna z aparatem kryształowym (jeden łuk)': '200 PLN',
      'Wizyta kontrolna z aparatem kryształowym (dwa łuki)': '260 PLN',
      'Aparat Clear Aligner wizyta diagnostyczna': '750 PLN',
      'Aparat Clear Aligner seria 3 nakładek na jeden łuk': '750 PLN',
      'Zdjęcie aparatu stałego (jeden łuk)': '100 PLN',
      'Aparat retencyjny stały': '300 PLN',
      'Aparat retencyjny zdejmowany': '550 PLN',
      'Wizyta kontrolna z retencją': '100 PLN',
      'Hyrax': '700 PLN',
      'Płytka Hassa': '700 PLN',
      "Płytka Nance'a": '450 PLN',
      'Ekspander/derotator': '700 PLN',
      'Łuk podniebienny': '350 PLN',
      "Maska Delaire'a": '500 PLN',
      'Headgear': '450 PLN',
      'Redukcja napiecia mięśni żuchwy, leczenie bruksizmu - Toksyna Botulinowa': '900 PLN',
      'Wizyta awaryjna': '20 - 50 PLN',
   },
   Endodoncja: {
      'Leczenie kanałowe zęba 1-kanałowego': '400-600 PLN',
      'Leczenie kanałowe zęba 2-kanałowego': '700 - 850 PLN',
      'Leczenie kanałowe zęba 3-kanałowego': 'od 900 PLN',
      'Leczenie kanałowe zęba 4-kanałowego': 'od 1200 PLN',
      'Powtórne leczenie zęba 1-kanałowego': '500 - 700 PLN',
      'Powtórne leczenie zęba 2-kanałowego': '750 - 1000 PLN',
      'Powtórne leczenie zęba 3-kanałowego': '1000 - 1500 PLN',
      'Powtórne leczenie zęba 4-kanałowego': 'od 1350 PLN',
      'Usunięcie złamanego narzędzia(bypass)': '300 - 500 PLN',
      'Udrożnienie zobliterowanego kanału': 'od 150 PLN',
      'Zamknięcie perforacji komory kanału/ open apex': '200 - 600 PLN',
      'Konsultacja endodontyczna ': '100 PLN',
      'Odbudowa ścian zęba do leczenia kanałowego': 'od 150 PLN',
      'Mikro resekcja wierzchołka korzenia ': '1000 PLN',
      'Amputacja przeżyciowa(MTA, Biodentine)': '300 - 500 PLN',
      'Wymiana opatrunku w kanałach': 'od 100 PLN'
   },
   RTG: {
      'Pantomogram': '100 PLN',
      'Zdjęcie cefalometryczne': '100 PLN',
      'Tomografia komputerowa': 'od 250 PLN',
      'Tomografia komputerowa punktowa jednego zęba': '120 PLN',
      'Zdjęcie punktowe': '30 PLN'
   },
   Profilaktyka: {
      'Ultradźwiękowe usuwanie kamienia nazębnego (skaling)': '100 - 150 PLN',
      'Piaskowanie zębów': '150 PLN',
      'Skaling + piaskowanie + fluoryzacja': '250 PLN',
      'Lakierowanie zębów': '80 - 120 PLN',
      'Lakowanie bruzd': '80 - 100 PLN',
      'Wystawienie recepty, zaświadczenia lekarskiego': '50 PLN'
   }
}

const main = document.querySelector('main')
const rodzaje = document.querySelectorAll('main div')
const h1 = document.querySelector('h1');

const deleteCennikShowMain = () => {
   const section = document.querySelector('section');

   section.style.opacity = 0;
   setTimeout(() => {
      h1.innerText = `Cennik`;
      section.remove();
      main.style.display = 'grid';
      main.classList.add('fadeIn');
      main.style.opacity = 1;
   }, 400);
}

const appendCennikHideMain = function () {
   const name = this.children[0].innerText;

   h1.innerText = `Cennik - ${name}`;
   main.style.opacity = 0;

   setTimeout(() => {
      main.classList.remove('fadeIn');
      main.style.display = 'none';
      const ceny = document.createElement('ul');
      const returnBtn = document.createElement('button');
      const section = document.createElement('section');

      returnBtn.innerText = 'Zobacz inne działy stomatologii'
      returnBtn.classList.add('btn', 'btn-danger');
      section.classList.add('container', 'fadeIn');

      for (let i in cennik[name]) {
         ceny.innerHTML += `<li>${i} : ${cennik[name][i]}</li>`
      }

      section.append(returnBtn, ceny);
      document.body.append(section);

      returnBtn.addEventListener('click', deleteCennikShowMain);

   }, 400);
}




for (let rodzaj of rodzaje) {
   rodzaj.addEventListener('click', appendCennikHideMain);
}