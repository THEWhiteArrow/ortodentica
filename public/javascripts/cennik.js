const cennik = {
   ortodoncja: {
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
   endodoncja: {
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
   rtg: {
      'Pantomogram': '100 PLN',
      'Zdjęcie cefalometryczne': '100 PLN',
      'Tomografia komputerowa': 'od 250 PLN',
      'Tomografia komputerowa punktowa jednego zęba': '120 PLN',
      'Zdjęcie punktowe': '30 PLN'
   },
   profilaktyka: {
      'Ultradźwiękowe usuwanie kamienia nazębnego (skaling)': '100 - 150 PLN',
      'Piaskowanie zębów': '150 PLN',
      'Skaling + piaskowanie + fluoryzacja': '250 PLN',
      'Lakierowanie zębów': '80 - 120 PLN',
      'Lakowanie bruzd': '80 - 100 PLN',
      'Wystawienie recepty, zaświadczenia lekarskiego': '50 PLN'
   },
   'stomatologia estetyczna': {
      'Wybielanie w gabinecie z użyciem lampy': '1000 PLN',
      'Wybielanie nakładkowe': '700 PLN',
      'Wybielanie zęba martwego – pierwsza wizyta/kolejne wizyty': '120/ 80 PLN',
      'Licówka porcelanowa': '1500 PLN',
      'Licówka kompozytowa - bezpośrednia/ pośrednia': '700/ 1000 PLN',
      'Wax-up (za punkt)': '60 PLN',
      'Mock-up (za punkt)': '100 PLN',
   },
   'stomatologia dziecięca': {
      'Wizyta adaptacyjna': '80 PLN',
      'Wypełnienie zęba mlecznego': '100 - 150 PLN',
      'Opatrunek leczniczy': '100 PLN',
      'Lakowanie bruzd': '80 - 100 PLN',
      'Dewitalizacja zęba mlecznego': '80 PLN',
      'Amputacja miazgi w zębie mlecznym': '100 PLN',
   },
   'stomatologia zachowawcza': {
      'Przegląd stomatologiczny': '50 PLN',
      'Wypełnienie kompozytowe ': '150 - 250 PLN',
      'Opatrunek leczniczy': '100 - 150 PLN',
      'Znieczulenie': '30 - 50 PLN',
      'Włókno szklane': '100 PLN',
   },
   'chirurgia stomatologiczna': {
      'Konsultacja chirurgiczna': '100 PLN',
      'Kortykotomia (za ząb)': '150 - 200 PLN',
      'Usunięcie zęba': '150 - 200 PLN',
      'Usunięcie zęba mlecznego': '100 - 150 PLN',
      'Ekstrakcja ósemki': '200 - 300 PLN',
      'Ekstrakcja ósemki zatrzymanej': '450 - 600 PLN',
      'Dłutowanie zęba': '350 - 450 PLN',
      'Hemisekcje': '400 PLN',
      'Resekcja': '400 - 500 PLN',
      'Odsłonięcie zęba i naklejenie zamka': '500 - 700 PLN',
      'Usunięcie torbieli': '400 PLN',
      'Usunięcie zęba zatrzymanego': '400 PLN',
      'Plastyka połączenia z zatoką szczękową': '200 PLN',
      'Augmentacja  z użyciem biomateriału': 'WYCENA INDYWIDUALNA',
      'Nacięcie ropnia': '200 PLN',
      'Płukanie jamy ropnia': '50 PLN',
      'Szycie': '50 PLN',
      'Zdjęcie szwów': 'BEZPŁATNIE',
      'Płukanie kieszonki': '40 PLN',
      'Podcięcie więzidełka': '250 - 350 PLN',
   },
   protetyka: {
      'Konsultacja protetyczna': '100 PLN',
      'Korona porcelanowa na stopie złota': '1200 - 1600 PLN',
      'Korona porcelanowa na metalu ': '900 PLN',
      'Korona pełnoceramiczna cerkon Lava': '1600 PLN',
      'Korona pełnoceramiczna Emax': '1600 - 1800 PLN',
      'Korona tymczasowa wykonana w gabinecie': '200 - 250 PLN',
      'Korona tymczasowa wykonana w pracowni protetycznej': '400 PLN',
      'Licówka porcelanowa': '1500 PLN',
      'Endokorona kompozytowa': '800 - 1000 PLN',
      'Endokorona porcelanowa ': '1600 PLN',
      'Nakład inlay/onlay/ overlay kompozyt': '600 - 1000 PLN',
      'Nakład inlay/onlay/ overlay porcelana ': '800 - 1600 PLN',
      'Most adhezyjny kompozyt/ porcelana (za punkt)': '350/800 PLN',
      'Wkład koronowo-korzeniowy stal prosty': '350 PLN',
      'Wkład koronowo-korzeniowy stal złożony': '400 PLN',
      'Wkład koronowo-korzeniowy stop złota': '1000 - 1400 PLN',
      'Proteza osiadająca całkowita': 'od 1200 PLN',
      'Elementy wzmacniające protezę (łuki, siatki) ': 'WYCENA INDYWIDUALNA',
      'Proteza częściowa (za punkt)': '80 PLN',
      'Proteza szkieletowa': 'od 1700 PLN',
      'Naprawa protezy ': 'od 200 PLN',
      'Szyna relaksacyjna': '600 - 1000 PLN',
      'Usunięcie korony/  wkładu': 'od 200/ od 300 PLN',
      'Modele diagnostyczne': 'od 120 PLN',
      'Rejestracja łukiem twarzowym': '100 PLN',
   },
   implantologia: {
      'Konsultacja PROMOCJA': '100 PLN',
      'Podniesienie zatoki ': '2500 - 3000 PLN',
      'Wszczepienie implantu (firmy OSSTEM) ': '2500 PLN',
      'Część protetyczna': 'od 2000 PLN',
      'Zabiegi modyfikujące podłoże kostne': 'wycena indywidualna',
   },
   periodontologia: {
      'Konsultacja periodontologiczna': '100 PLN',
      'Kiretaż zamknięty (za ząb)': '80 PLN',
      'Kiretaż otwarty (za ząb)': '200 - 400 PLN',
      'Aplikacja leku (za ząb)': '30 PLN',
      'Panel periodontologiczny': '120 PLN',
      'Wydłużenie korony klinicznej zęba': '200 - 400 PLN',
      'Gingiwektomia': 'od 200 PLN',
      'Test PET': 'od 250 PLN',
   }
}


const main = document.querySelector('main')
const rodzaje = document.querySelectorAll('main button')
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
   const name = this.children[0].innerText.toLowerCase();

   h1.innerText = `Cennik - ${name}`;
   main.style.opacity = 0;

   setTimeout(() => {
      main.classList.remove('fadeIn');
      main.style.display = 'none';
      const ceny = document.createElement('ul');
      const returnBtn = document.createElement('button');
      const section = document.createElement('section');

      returnBtn.innerHTML = `<svg class="svg-icon" viewBox="0 0 20 20">
      <path d="M11.739,13.962c-0.087,0.086-0.199,0.131-0.312,0.131c-0.112,0-0.226-0.045-0.312-0.131l-3.738-3.736c-0.173-0.173-0.173-0.454,0-0.626l3.559-3.562c0.173-0.175,0.454-0.173,0.626,0c0.173,0.172,0.173,0.451,0,0.624l-3.248,3.25l3.425,3.426C11.911,13.511,11.911,13.789,11.739,13.962 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.148,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.148,17.521,10"></path>
      <span>ZOBACZ INNE DZIAŁY STOMATOLOGII</span>`
      returnBtn.classList.add('return');
      section.classList.add('container', 'fadeIn');

      for (let i in cennik[name]) {
         ceny.innerHTML += `<li><span class="action">${i} </span> <span class="price">${cennik[name][i]}</span></li>`
      }

      section.append(returnBtn, ceny);
      document.body.append(section);

      returnBtn.addEventListener('click', deleteCennikShowMain);

   }, 400);
}





const init = () => {
   for (let rodzaj of rodzaje) {
      rodzaj.addEventListener('click', appendCennikHideMain);
   }
}

init();