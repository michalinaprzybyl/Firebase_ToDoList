import { storage, auth } from "../../firebaseConfig.js";
import { ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";

// W funkcji poniżej:
// 1. Przy uźyciu querySelector wybieracie sekcje o klasie "content" i od razu czyścicie przy pomocy innerHTML.
// 2. Stwórz element <h2> i nadaj mu textContent 'Welcome!'
// 3. Stwórz element <p> i nadaj mu textContent "This is a simple web page written in vanilla JavaScript, used as a practice project in frontend courses at Software Development Academy. Block subject: Firebase."
// 4. Podpinacie h2 i p do sekcji content

export default function () {
    // 1.
    const contentContainer = document.querySelector(".content");
    contentContainer.innerHTML = "";
    // 2.
    const h2 = document.createElement("h2");
    h2.textContent = "Welcome!";
    // 3.
    const p = document.createElement("p");
    p.textContent = "This is a simple web page written in vanilla JavaScript, used as a practice project in frontend courses at Software Development Academy. Block subject: Firebase.";
    // 4.
    contentContainer.appendChild(h2);
    contentContainer.appendChild(p);

    if (auth.currentUser) {
        const storageRef = ref(storage, `/users/${auth.currentUser.uid}/avatar`);
        getDownloadURL(storageRef) // ta f zwraca URL do pobrania tego elementu
            .then((url) => {
                const img = document.createElement("img");
                img.setAttribute("src", url);
                contentContainer.appendChild(img);
            });
    }
}

