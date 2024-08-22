const home = document.getElementById("home");
const logo = document.getElementById("logo");
const workouts = document.getElementById("workouts");
const gyms = document.getElementById("gyms");
const trainers = document.getElementById("trainers");
const nutritionists = document.getElementById("nutritionists");

// Functiile de navigare intre pagini
function goToHome() {
    home.addEventListener("click", () => {
        window.location.href = "http://localhost:8081/home"
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
        window.location.href = "http://localhost:8081/home"
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


function setPointer(){
    logo.style.cursor = "pointer";
    
}
setPointer();   