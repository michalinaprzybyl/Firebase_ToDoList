import renderTodoForm from "../TodoForm/renderTodoForm.js";
import { ref, onValue, push, update, remove } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
import { auth, db } from "../../firebaseConfig.js";

export default function () {
    const contentContainer = document.querySelector(".content");
    // tworzę referencję do todosów w bazie danych
    const todoRef = ref(db, "todos/" + auth.currentUser.uid);

    onValue(todoRef, (snapshot) => { // f wykonująca kod kiedy wartość z todoRef się zmieni
        const data = snapshot.val(); // wyciągam dane ze snapshota;
        console.log(data);
        if (!data) {
            // 1. Wyczyść contentContainer
            // 2. Stwórz element <h2> z textContent "Add, remove and edit your todos" i podepnij go do content containera
            // 3. Wywołaj funckję renderTodoForm i zapisz wynik wywołania do zmiennej 
            // 4. Podpięcie todoForm do containera
            // 5. Dodaj eventListener na todoForm (reagujemy na submit, pamiętać o event.preventDefault())
            // W eventListenerze
            // 6. Wybierz wszystkie radio inputy i zapisz do zmiennej radios (document.getElementsByName (DOKUMENTACJA)), zrób z tego array bo getElementsByName zwraca NodeList
            // 7. Z tych 4 radio imputów znajdź ten który jezt zaznaczony (input.checked, .find(), wybieranie elementów w CSS w zależności od atrybutów), po znalezieniu inputu ściągnąć z niego .value
            // 8. Wybierz input o id "todo-input" przy pomocy getElementById i ściągnij z niego value, zapisz do zmiennej
            
            // 1.
            contentContainer.innerHTML = "";
            // 2.
            const h2 = document.createElement("h2");
            h2.textContent = "Add, remove and edit your todos";
            contentContainer.appendChild(h2);
            // 3.
            const todoFrom = renderTodoForm();
            // 4.
            contentContainer.appendChild(todoFrom);
            // 5.
            todoFrom.addEventListener("submit", (event) => {
                event.preventDefault();
                // 6.
                const radios = [...document.getElementsByName("category")];
                // 7.
                const category = radios.find((el) => el.checked).value;
                // 8.
                const todoInput = document.getElementById("todo-input").value;
                // const todoInputValue = todoInput.value;
                console.log(category, todoInput);
            });
        }
    });
}



