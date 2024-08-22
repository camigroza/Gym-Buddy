const home = document.getElementById("logo");
const button = document.getElementById("button");

// Functiile de navigare intre pagini
function goToHome() {
    home.addEventListener("click", () => {
        window.location.href = "http://localhost:8081/home"
    })
};
goToHome();

// Merge la urmatoarea pagina
function goToNext() {
    button.addEventListener("click", () => {
      // verifica daca toate campurile sunt completate
      const requiredFields = document.querySelectorAll("[required]");
      for (const field of requiredFields) {
        if (!field.value.trim()) {
          alert("Completează toate câmpurile înainte de a merge mai departe!");
          return; // Stop
        }
      }
  
      console.log('hei');
      // Apelează funcția care verifica datele de pe server
      verifyUserData(() => {
        // Redirecționează către următorul endpoint doar dacă datele sunt corecte
           window.location.href = "http://localhost:8081/home-curiosity";
      });
      // window.location.href = "http://localhost:8081/home-curiosity";
    });
  }
  
  let userDataFromServer = null;
  
  // Funcție pentru a prelua datele utilizatorului de la server
  function getUserData(callback) {
    console.log(callback);
    fetch("http://localhost:8081/my-account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDataFromServer),
    })
      .then((response) => response.json())
      .then((data) => {
        //console.log("date: ",data);
        console.log("Datele utilizatorului au fost obținute cu succes:", data);
  
        userDataFromServer = data;
        console.log(userDataFromServer);
        // return data;
        // Apelul către funcția de callback pentru a continua cu prelucrarea datelor obținute
        callback(data);
      })
      .catch((error) => {
        console.error("Eroare la obținerea datelor utilizatorului:", error);
        // Tratează eroarea aici, dacă este necesar
        console.error(error.message);
      });
  }
  
  // Funcție pentru a verifica datele utilizatorului
  function verifyUserData(callback) {
    console.log('8');
    // Colectează datele din input-uri
    const emailInput = document.getElementById("email-input").value;
    const passwordInput = document.getElementById("psw-input").value;
  
    // Trimite datele la backend
    fetch("http://localhost:8081/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: emailInput, password: passwordInput }),
    })
      .then((response) => {
        if (response.ok) {
          console.log(response);
          // Dacă autentificarea a fost reușită, poți face ceva în continuare sau apela callback-ul
          callback();
        } else {
          alert("Autentificare eșuată. Verifică emailul și parola.");
        }
      })
      .catch((error) => console.error("Eroare la autentificare:", error));
  }

  goToNext();

function setPointer(){
    home.style.cursor = "pointer";
}

setPointer();