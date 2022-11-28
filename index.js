import renderHomePage from "./components/HomePage/renderHomePage.js";   // to jest export default 
import renderLoginPage from "./components/LoginPage/renderLoginPage.js";
import { auth } from "./firebaseConfig.js";
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import renderTodoForm from "./components/TodoForm/renderTodoForm.js";
import renderTodoPage from "./components/TodoPage/renderTodoPage.js";

// Selecting the content section
const contentContainer = document.querySelector(".content");

// Selecting navbar anchors
const homeButton = document.getElementById("home-anchor");
const todosButton = document.getElementById("todos-anchor");
const aboutButton = document.getElementById("about-anchor");
const publicButton = document.getElementById("public-anchor");
const loginButton = document.getElementById("login-anchor");

// Reacting to auth atate change
onAuthStateChanged(auth, (user) => {
    if (user) {
        // console.log(user.email);
        console.log(`User is loged in (${user.email}), onAuthStateChanged`);
        loginButton.textContent = "Log out";
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