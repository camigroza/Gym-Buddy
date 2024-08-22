const home = document.getElementById("logo");
const previous = document.getElementById("previous");
const next = document.getElementById("next");

// Functiile de navigare intre pagini
function goToHome(){
    home.addEventListener("click", () => {
        window.location.href = "http://localhost:8081/home"
    })
};
goToHome();

function goToPrevious(){
    previous.addEventListener("click", () => {
        window.location.href = "http://localhost:8081/questionnaire1"
    })
};
goToPrevious();

let selectedSide = null;

function selectSide(side) {
    selectedSide = side.textContent;
}

function goToNext() {
    next.addEventListener("click", () => {
        // Verifica daca un buton e selectat
        if (selectedSide === null) {
            alert("Selectează sexul înainte de a merge mai departe!");
            return; // Stop 
        }

        // verifica daca toate campurile sunt completate
        const requiredFields = document.querySelectorAll('[required]');
        for (const field of requiredFields) {
            if (!field.value.trim()) {
                alert("Completează toate câmpurile înainte de a merge mai departe!");
                return; // Stop 
            }
        }

        // Apelează funcția care trimite datele către server pentru salvare
        saveUserData(() => {
            // Redirecționează către următorul endpoint doar după ce datele sunt salvate
            window.location.href = "http://localhost:8081/home";
        });
    });
};

function saveUserData(callback) {
    // Colectează datele din formular
    const gender = selectedSide;
    console.log(gender);
    const dateOfBirth = document.getElementById("email-input").value;
    console.log(dateOfBirth);
    const height = document.getElementById("height").value;
    console.log(height);
    const weight = document.getElementById("weight-input").value;
    console.log(weight);
    const city = document.getElementById("city-input").value;
    console.log(city);

    // Construiește obiectul de date
    const userData = {
        sex: gender,
        dateOfBirth: dateOfBirth,
        height: height,
        weight: weight,
        city: city,
    };
    
    // Trimite cererea POST către server pentru salvare
    fetch('http://localhost:8081/questionnaire2', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
    .then(response => response.text())
    .then(data => {
        console.log('Datele au fost trimise cu succes:', data);
        // Apelul către funcția de callback pentru a continua cu redirecționarea
        callback();
    })
    .catch((error) => {
        console.error('Eroare la trimiterea datelor:', error);
    });
}

goToNext();


function setPointer(){
    home.style.cursor = "pointer";
    previous.style.cursor = "pointer";
    next.style.cursor = "pointer";
}
setPointer();


document.addEventListener('DOMContentLoaded', function () {
    const splitButtons = document.querySelectorAll('.split-button button');
    const imageButton = document.querySelector('.image-button');

    // Adauga click event listener pe butoanele de gender
    splitButtons.forEach(splitButton => {
        splitButton.addEventListener('click', function () {
            splitButtons.forEach(btn => btn.classList.remove('clicked'));
            this.classList.add('clicked');
            selectSide(this);
        });
    });

    // Adauga click event listener pe sageti
    imageButton.addEventListener('click', function () {
        imageButton.classList.add('clicked');
    });
});

