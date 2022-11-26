// W funkcji poniżej:
// 1. Wybranie i wyczyszczenie sekcji o klasie "content"
// 2. Stwórz element <form> i nadaj mu id 'register-form'.
// 3. Stówrz element <input>, nadaj mu type "email", placeholder "email", id "register-email-input".
// 4. Stwórz 2 osobne inputy, oba będą miały type 'password', oba placeholder "password", pierwszy będzie miał id "register-first-input-password" a drugi id "register-second-input-password"
// 5. Stwórz element <button>, nadaj mu type "submit" i textContent "Register"
// 6. Do elementu <form> (pkt 2) podpiąć wszystkie inputy i button.
// 7. Do sekcji content podpiąć cały formularz

export default function () {
    // 1.
    // nie używaj tutaj document.getElementsByClassName
    const contentClass = document.querySelector(".content");
    contentClass.innerHTML = "";
    // 2.
    const form = document.createElement("form");
    form.setAttribute("id", "register-form");
    // 3.
    const inputMail = document.createElement("input");
    inputMail.setAttribute("type", "email");
    inputMail.setAttribute("placeholder", "email");
    inputMail.setAttribute("id", "register-email-input");
    // 4.
    const inputPassword = document.createElement("input");
    inputPassword.setAttribute("type", "password");
    inputPassword.setAttribute("placeholder", "password");
    inputPassword.setAttribute("id", "register-first-input-password");
    const inputPassConfirm = document.createElement("input");
    inputPassConfirm.setAttribute("type", "password");
    inputPassConfirm.setAttribute("placeholder", "password");
    inputPassConfirm.setAttribute("id", "register-second-input-password");
    // 5.
    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Register";
    // 6.
    form.appendChild(inputMail);
    form.appendChild(inputPassword);
    form.appendChild(inputPassConfirm);
    form.appendChild(submitButton);
    // 7.
    contentClass.appendChild(form);
}