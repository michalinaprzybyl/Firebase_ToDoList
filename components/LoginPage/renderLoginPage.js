// 1. Zaimportuj renderLoginForm i renderRegisterForm.
// W funkcji:
// 2. Wybierz i wyczyść sekcję content.
// 3. Stwórz element <h2> i nadaj mu textContent 'Log in or sign up'.
// 4. Stwórz element <p> i nadaj mu textContent "Our authentication mechanism uses Firebase Auth and is 100% secure.".
// 5. Stwórz element <label> i nadaj mu textContent 'Log in'.
// 6. Wywołaj funckje renderLoginForm i zapisz wynik do zmiennej.
// 7. Stwórz element <button>, nadaj mu id 'register-button' i textContent 'Register'.
// 8. Do sekcji content podepnij: h2, p, label, form, button.
// 9. Na buttona register nadaj EventListener (na click). W środku wyczyść sekcję content (innerHTML) i wywołaj renderRegisterForm.

// 1.
import renderLoginForm from "../LoginForm/renderLoginForm.js";
import renderRegisterForm from "../RegisterForm/renderRegisterForm.js";

export default function () {
    // 2.
    const contentContainer = document.querySelector(".content");
    contentContainer.innerHTML = "";
    // 3.
    const h2 = document.createElement("h2");
    h2.textContent = "Log in or sign up";
    // 4.
    const p = document.createElement("p");
    p.textContent = "Our authentication mechanism uses Firebase Auth and is 100% secure.";
    // 5.
    const label = document.createElement("label");
    label.textContent = "Log in";
    // 6.
    const form = renderLoginForm();
    // 7.
    const button = document.createElement("button");
    button.setAttribute("id", "register-button");
    button.textContent = "Register";
    // 8.
    contentContainer.appendChild(h2);
    contentContainer.appendChild(p);
    contentContainer.appendChild(label);
    contentContainer.appendChild(form);
    contentContainer.appendChild(button);
    // 9.
    button.addEventListener("click", function () {
        // contentContainer.innerHTML= ""; // niepotrzebne, bo już wyczyściłam w renderRegisterForm.js
        renderRegisterForm();
    });
    // można też zapisać: button.addEventListener("click", renderRegisterForm);
}