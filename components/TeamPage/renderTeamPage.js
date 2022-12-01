// 1. Importy: renderTodoForm; collection, addDoc, getDocs ("https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js"); obiekt firestore z firebaseConfig
// W funkcji:
// 2. Wybranie i czyszczenie content container
// 3. Stwórz element <h2>, textContent "Your team's todos.", od razu podepnij do content containera
// 4. Wywołaj funkcję renderTodoFrom, wynik zapisz do zmiennej
// 5. Nadaj todo formowi id 'teams-todo-form', od razu podepnij do content containera
// 6. Na todoForm nadaj EL na submit.
// W EL:
// 7. Wybierz todoInput i ściągnij z niego value (id 'todo-input')
// 8. Wybranie i ściągnięcie value z odpowiedniego radio inputa
// 9. Użyj funkcji addDoc do wrzucenia danych do bazy, dodać thena za addDoc żeby potwierdzić poprawność działania funckji, dodaj też catcha
// FUNKCJA COLLECTION: collection(firestore, "teams") 

// 1.
import renderTodoForm from "../TodoForm/renderTodoForm.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
import { firestore } from "../../firebaseConfig.js";

export default function () {
    // 2.
    const contentContainer = document.querySelector(".content");
    contentContainer.innerHTML = "";
    // 3.
    const h2 = document.createElement("h2");
    h2.textContent = "Your team's todos.";
    contentContainer.appendChild(h2);
    // 4.
    const todoForm = renderTodoForm();
    // 5.
    todoForm.setAttribute("id", "teams-todo-form");
    contentContainer.appendChild(todoForm);
    // 6.
    todoForm.addEventListener("submit", (event) => {
        event.preventDefault();
        // 7.
        const todoInputValue = document.getElementById("todo-input").value;
        // 8.
        const category = [...document.getElementsByName("category")]
            .find((el) => el.checked).value;
        // 9.
        addDoc(collection(firestore, "teams"), {
            todoInputValue,
            category
        })
            .then(() => console.log("Pushed the data to firestore"))
            .catch((err) => console.log(err.message));
    });

    // 1. Stwórz element <ul>, id "teams-todo-list"
    // 2. Stwórz funkcję asynchroniczną, nazwij ją readDocData.
    // W funkcji readDocData:
    // 3. Wywołaj funkcję getDocs i ściągnij dane z kolekcji "teams". Wynik wywołania zapisz do zmiennej querySnapshot, pamiętaj o await!
    // 4. Na zmiennej querySnapshot wywołaj forEach'a (w parametrze będzie miał doc, (doc) => {...}). W forEach'u stwórz zmienną todo i zapisz w niej wynik wyowołania metody data() na parametrze doc (const todo = doc.data())
    // 5. Console.log(todo) żeby zobaczyć co to jest
    // 6. Stwórz element <li>, w textContent ma się znaleźć todoText i category
    // 7. Podepnij li (pkt 6) do ul (pkt 1).
    // ==KONIEC FOREACH I FUNKCJI READDOCDATA==
    // 8. Wywołanie readDocData
    // 9. Podepnij ul (pkt 1) do content container.

    // 1.
    const ul = document.createElement("ul");
    ul.setAttribute("id", "teams-todo-list");
    // 2.
    const readDocData = async () => {
        try {
            // 3.
            const querySnapshot = await getDocs(collection(firestore, "teams")); // tu lista opakowanych dokumentów we wskazanej kolekcji
            // 4.
            querySnapshot.forEach((doc) => {
                const todo = doc.data(); // dzięki met data() rozpakowuję obiekt .json i w todo on już siedzi jako .js
                // 5.
                console.log(todo);
                // 6.
                const li = document.createElement("li");
                li.textContent = `${todo.todoInputValue} (${todo.category})`;
                // 7.
                ul.appendChild(li);
            });
        } catch (err) {
            console.error(err);
        }
    }
    // 8.
    readDocData();
    // 9.
    contentContainer.appendChild(ul);
}
