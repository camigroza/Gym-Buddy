const home = document.getElementById("logo");
const button = document.getElementById("button");

// Merge la pagina de home
function goToHome() {
    home.addEventListener("click", () => {
        window.location.href = "http://localhost:8081/home"
    })
};
goToHome();


// Merge la urmatoarea pagina
function goToNext() {
    button.addEventListener("click", () => {
        // Apelează funcția care trimite datele către server pentru salvare
        saveUserData(() => {
            // Redirecționează către următorul endpoint doar după ce datele sunt salvate
            window.location.href = "http://localhost:8081/questionnaire1";
        });
    });
};

function saveUserData(callback) {
    // Colectează datele din formular
    const name = document.getElementById("name-input").value;
    const email = document.getElementById("email-input").value;
    const password = document.getElementById("psw-input").value;

    // Construiește obiectul de date
    const userData = {
        name: name,
        email: email,
        password: password
    };

    // Trimite cererea POST către server pentru salvare
    fetch('http://localhost:8081/signup', {
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
}

setPointer();