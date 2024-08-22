const home = document.getElementById("home");
const logo = document.getElementById("logo");
const workouts = document.getElementById("workouts");
const gyms = document.getElementById("gyms");
const trainers = document.getElementById("trainers");
const nutritionists = document.getElementById("nutritionists");

// Functiile de navigare intre pagini
function goToHome() {
    home.addEventListener("click", () => {
        window.location.href = "http://localhost:8081/home-curiosity"
    })
};
goToHome();


// function goToAccount() {
//     account.addEventListener("click", () => {
//         window.location.href = "http://localhost:8081/my-account"
//     })
// };
// goToAccount();

function goToLogo() {
    logo.addEventListener("click", () => {
        window.location.href = "http://localhost:8081/home-curiosity"
    })
};
goToLogo();

function goToWorkouts() {
    workouts.addEventListener("click", () => {
        window.location.href = "http://localhost:8081/workouts"
    })
};
goToWorkouts();

function goToGyms() {
    gyms.addEventListener("click", () => {
        window.location.href = "http://localhost:8081/gyms"
    })
};
goToGyms();

function goToNutritionists() {
    nutritionists.addEventListener("click", () => {
        window.location.href = "http://localhost:8081/nutritionists"
    })
};
goToNutritionists();

function goToTrainers() {
    trainers.addEventListener("click", () => {
        window.location.href = "http://localhost:8081/trainers"
    })
};
goToTrainers();


function setPointer() {
    logo.style.cursor = "pointer";
}
setPointer();


const quotes = [
    "Dacă nu faci nicio schimbare, nu se va schimba nimic.",
    "Peste un an, îți vei dori să fii început astăzi să faci mișcare.",
    "Cu cât este mai greu de obținut o victorie, cu atât este mai mare fericirea de a câștiga.",
    "Ai grijă de corpul tău. Este locul în care vei trăi toată viața.",
    "Daca te-ai săturat să o iei mereu de la început, încetează să mai renunți.",
    "Vârsta nu este o barieră. Este o limită pe care ți-o pui în mintea ta.",
    "Dacă nu te provoacă, nu te schimba.",
    "Încetează să mai concurezi cu ceilalți. Întrece-te cu tine însuți/însăți.",
    "Schimbările mici pot face diferențe mari.",
    "Niciodată nu e prea târziu să fii ceea ce ai fi putut fi.",
    "Calea cea mai rapidă spre un ten frumos este prin sport și nutriție sănătoasă.",
    "Sănătatea este relația dintre tine și corpul tău.",
    "Gândește-te de ce ai început.",
    "Disciplina înseamnă să faci ceea ce trebuie făcut, chiar dacă nu îți dorești asta.",
    "Comparația îți fură întreaga bucurie. Concentrează-te să fii mai bun(a) decât ai fost ieri.",
    "Crede în tine chiar și atunci când nimeni altcineva nu crede.",
    "O oră reprezintă doar 4 % dintr-o zi. Nu există scuze!",
    "Vocea aceea din interiorul tău care îți spune că nu poți, minte.",
    "Să fii FIT nu este o destinație, ci un mod de viață.",
    "Mișcarea ajută creierul să se elibereze de stres.",
    "Nu-ți spun că va fi ușor, dar cu siguranță că va merita.",
    "Corpul tău poate face orice. Trebuie doar să-ți convingi creierul.",
    "Ești mai puternic(a) decât crezi!",
    "Viața începe în afara zonei tale de confort.",
    "Poate că nu am ajuns încă, dar sunt mai aproape decât am fost ieri.",
    "Nu-ţi fie teamă că înaintezi prea încet. Să-ţi fie teamă dacă te opreşti.",
    "Nimeni nu este perfect, așa că treci peste teama de a fi sau de a face totul perfect. În plus, a fi perfect este plictisitor.",
    "Nu mă antrenez pentru că îmi urăsc corpul, mă antrenez pentru că îmi iubesc corpul.",
    "Respectă-ți corpul. Este singurul pe care îl primești.",
    "Amințiți-vă întotdeauna: lucrurile bune necesită timp.",
    "Uită-te în oglindă. Asta e concurența ta.",
    "Un corp slab slăbește mintea.",
    "Permite ca exercițiile fizice să te elibereze de stres, și nu mâncarea.",
    "Ești mult prea inteligent ca să fii singurul lucru care îți stă în cale.",
    "Motivează-te pentru că nimeni altcineva nu o va face pentru tine.",
    "Astăzi este o zi bună pentru a începe.",
    "Întotdeauna ai fost un om frumos. Acum decidezi să fii mai sănătos, mai bine pregătit, mai rapid și mai puternic. Să nu uiți asta.",
    
];

const quoteBox = document.getElementById("quoteBox");

// Functia de afisare a citatelor random
function displayRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
  var selectedQuote = quotes[randomIndex];

  var quoteBox = document.getElementById("quoteBox");

  if (quoteBox) {
    quoteBox.textContent = selectedQuote;
  } else {
    console.error("quoteBox not found in the DOM");
  }
}

window.onload = displayRandomQuote;

// Schimbare citate la fiecare 8 secunde
setInterval(displayRandomQuote, 8000);


const quote1 = document.getElementById('quote1');
const modal_container1 = document.getElementById('modal-container1');
const close1 = document.getElementById('close1');

quote1.addEventListener('click', () => {
    modal_container1.classList.add('show');
});

close1.addEventListener('click', () => {
    modal_container1.classList.remove('show');
});


// Deschidere fereastra cu informatia despre alimentatie

const quote2 = document.getElementById('quote2');
const modal_container2 = document.getElementById('modal-container2');
const close2 = document.getElementById('close2');

quote2.addEventListener('click', () => {
    modal_container2.classList.add('show');
});

close2.addEventListener('click', () => {
    modal_container2.classList.remove('show');
});

// Deschidere fereastra cu informatia despre muschi

const quote3 = document.getElementById('quote3');
const modal_container3 = document.getElementById('modal-container3');
const close3 = document.getElementById('close3');

quote3.addEventListener('click', () => {
    modal_container3.classList.add('show');
});

close3.addEventListener('click', () => {
    modal_container3.classList.remove('show');
});


// Deschidere fereastra cu informatia despre suplimente

const quote4 = document.getElementById('quote4');
const modal_container4 = document.getElementById('modal-container4');
const close4 = document.getElementById('close4');

quote4.addEventListener('click', () => {
    modal_container4.classList.add('show');
});

close4.addEventListener('click', () => {
    modal_container4.classList.remove('show');
});
