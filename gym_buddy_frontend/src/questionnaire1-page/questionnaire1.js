const home = document.getElementById("logo");
const next = document.getElementById("next");

//Functiile de navigare intre pagini
function goToHome() {
    home.addEventListener("click", () => {
        window.location.href = "http://localhost:8081/home"
    })
};
goToHome();

function setPointer() {
    home.style.cursor = "pointer";
    next.style.cursor = "pointer";
}
setPointer();

let selectedButton = null;

function selectButton(buttonText) {
    if (selectedButton === buttonText) {
        selectedButton = null; // Deselectează butonul
    } else {
        selectedButton = buttonText; // Marchează butonul ca selectat
    }
}


function goToNext() {
    next.addEventListener("click", () => {
        // Verifica daca un buton e selectat
        if (selectedButton === null) {
            alert("Selectează un țel înainte de a merge mai departe!");
            return; // Stop 
        }

        // Apelează funcția care trimite datele către server pentru salvare
        saveUserData(() => {
            // Redirecționează către următorul endpoint doar după ce datele sunt salvate
            window.location.href = "http://localhost:8081/questionnaire2";
        });
    });
};

function saveUserData(callback) {
    // Colectează datele din formular
    const goal = selectedButton;

    // Construiește obiectul de date
    const userData = {
        goal: goal
    };

    // Trimite cererea POST către server pentru salvare
    fetch('http://localhost:8081/questionnaire1', {
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


const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('clicked'));
        this.classList.add('clicked');
        selectButton(this.innerText); // Aici se actualizează variabila selectedButton cu textul butonului
    });
});
