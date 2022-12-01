import renderHomePage from "./components/HomePage/renderHomePage.js";   // to jest export default 
import renderLoginPage from "./components/LoginPage/renderLoginPage.js";
import { ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";
import { auth, storage } from "./firebaseConfig.js";
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import renderTodoForm from "./components/TodoForm/renderTodoForm.js";
import renderTodoPage from "./components/TodoPage/renderTodoPage.js";
import renderTeamPage from "./components/TeamPage/renderTeamPage.js";
import renderStoragePage from "./components/StoragePage/renderStoragePage.js";

// Selecting the content section
const contentContainer = document.querySelector(".content");

// Selecting navbar anchors
const homeButton = document.getElementById("home-anchor");
const todosButton = document.getElementById("todos-anchor");
const storageButton = document.getElementById("storage-anchor");
const publicButton = document.getElementById("public-anchor");
const loginButton = document.getElementById("login-anchor");

// Reacting to auth atate change
onAuthStateChanged(auth, (user) => {
    if (user) {
        // console.log(user.email);
        console.log(`User is loged in (${user.email}), onAuthStateChanged`);
        loginButton.textContent = "Log out";
        const h2 = document.querySelector("h2");
        if (h2.textContent === "Welcome!") {
            const storageRef = ref(storage, `/users/${auth.currentUser.uid}/avatar`);
            getDownloadURL(storageRef) // ta f zwraca URL do pobrania tego elementu
                .then((url) => {
                    const img = document.createElement("img");
                    img.setAttribute("src", url);
                    contentContainer.appendChild(img);
                });
        }
    } else {
        console.log(`No user logged in, onAuthStateChanged`);
        loginButton.textContent = "Log in";
    }
})

// Rendering the home page on initial page load
renderHomePage();
// renderRegisterForm();
// contentContainer.appendChild(renderLoginForm());

// Navbar buttons listeners
// Home button
homeButton.addEventListener("click", () => {
    renderHomePage();
});
// można też zapisaćw ten sposób:
// homeButton.addEventListener("click", renderHomePage);

// Todos button
todosButton.addEventListener("click", () => {
    contentContainer.innerHTML = "";
    // renderTodoPage();
    const user = auth.currentUser;
    user ? renderTodoPage() : renderLoginPage();
});

// Storage button
storageButton.addEventListener("click", renderStoragePage);

// Team todos button
publicButton.addEventListener("click", renderTeamPage);

// Login button
loginButton.addEventListener("click", () => {
    // renderLoginPage();
    // Jeżeli user istnieje, kliknięcie na ten button ma wywołać funkcję signOut i renderHomePage
    // Jeżeli user nie istnieje, to kliknięcie na ten button ma wywołać funkcję renderLoginPage
    if (auth.currentUser) {
        signOut(auth)
            .then(() => renderHomePage())
            .catch((err) => console.log(err));
    } else {
        renderLoginPage();
    }
});