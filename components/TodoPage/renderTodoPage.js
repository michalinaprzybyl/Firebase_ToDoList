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
                // push'uję do bazdy danych
                console.log(category, todoInput);
                push(todoRef, {
                    todoInput,
                    category
                })
                    .then(() => console.log("Pushed the data to db"))
                    .catch((err) => console.log(err.message));
            });
        } else {
            const todos = Object.values(data);
            console.log(todos);
            // 1. Stwórz element < h2 >, textContent 'Add, remove and edit your todos'
            // 2. Stwórz zmienną listItems, wartością tej zmiennej będzie wywołanie metody .map() na zmiennej todos (const listItems = todos.map(el, i)=> ...).
            // 3. W metodzie map (pkt 2):
            // - stwórz element <li>, id li-${i}
            // - stwórz element <div>, id div-${i}
            // - stwórz element <span>, textContent będzie musiał zawierać todoText (u mnie todoInput) i kategorię
            // - stwórz element <button>, id edit-button-${i}, class 'edit-button', textContent 'Edit
            // - stwórz element <button>, id remove-button-${i}, class 'remove-button', textContent 'remove'
            // - do diva podepnij spana, editButton  removeButton 
            // - do li podepnij diva (appendChild)
            // zwróc li przy pomocy return (return li)
            // 4. POZA METODA MAP console.log(listItems)

            // 1.
            const h2 = document.createElement("h2");
            h2.textContent = "Add, remove and edit your todos";
            // 2.
            const listItems = todos.map((el, i) => {
                console.log(el);
                // 3.
                const li = document.createElement("li");
                li.setAttribute("id", `li-${i}`);
                const div = document.createElement("div");
                div.setAttribute("id", `div-${i}`);
                const span = document.createElement("span");
                span.textContent = `${el.todoInput} (${el.category})`;
                const editButton = document.createElement("button");
                editButton.setAttribute("id", `edit-button-${i}`);
                editButton.setAttribute("class", "edit-button");
                editButton.textContent = "Edit";
                const removeButton = document.createElement("button");
                removeButton.setAttribute("id", `remove-button-${i}`);
                removeButton.setAttribute("class", "remove-button");
                removeButton.textContent = "Remove";
                div.appendChild(span);
                div.appendChild(editButton);
                div.appendChild(removeButton);
                li.appendChild(div);
                return li;
            });
            // 4.
            console.log(listItems);

            // 1. Stwórz element < ul >
            // 2. Wywołaj metodę forEach na zmiennej listItems, w środku forEach'a podepnij aktualny element    po którym iterujesz do ul'a z pkt 1 
            // 3. Wyczyść content container 
            // 4. Stwórz zmienną todoForm, zapisz w niej wywołanie renderTodoForm (const todoForm = render...)
            // 5. Do content containera podepnij h2
            // 6. Do content con podepnij todoForm
            // 7. Do content con podepnij ul
            // 8. Na todoForm nakładacie event listenera (ten sam co wyżej w tym pliku)
            // 9. Pomyśl jak można by skrócić kod (mamy 2 te same event listenery), jeżeli wpadniesz na jakiś pomysł, zastosuj go

            // 1. 
            const ul = document.createElement("ul");
            // 2.
            listItems.forEach((el) => ul.appendChild(el));
            // 3.
            contentContainer.innerHTML = "";
            // 4.
            const todoForm = renderTodoForm();
            // 5.
            contentContainer.appendChild(h2);
            // 6.
            contentContainer.appendChild(todoForm);
            // 7.
            contentContainer.appendChild(ul);
            // 8.
            todoForm.addEventListener("submit", (event) => {
                event.preventDefault();
                const radios = [...document.getElementsByName("category")];
                const category = radios.find((el) => el.checked).value;
                const todoInput = document.getElementById("todo-input").value;
                console.log(category, todoInput);
                push(todoRef, {
                    todoInput,
                    category
                })
                    .then(() => console.log("Pushed the data to db"))
                    .catch((err) => console.log(err.message));
            })

            // 1. Wybierz wszystkie edit buttony (wszystkie mają klasę "edit-button"), zwróci wam to HTMLCollection, trzeba przerobić na zwykły array
            // 2. Na arrayu z pkt 1, wywołaj forEach (el, i).
            // W środku forEach'a:
            // a) nadaj na element po którym iterujesz event listener (click)
            // W środku tego event listenera:
            // a) usuń z domu element po którym aktualnie iterujesz (.remove())
            // b) stwórz zmienną div w której będziesz przechowywał diva-rodzica edit buttona (doc.getEBID(div-${i}))
            // c) stwórz zmienną form i wywołaj w niej renderTodoForm
            // d) nadaj temu formularzowi id zależne od indexu (todo-form-${i})
            // e) do diva (ppkt b) podpinacie form (ppkt c)

            // 1.
            const editButtons = [...document.getElementsByClassName("edit-button")];
            // 2.
            editButtons.forEach((el, i) => {
                el.addEventListener("click", () => {
                    // a)
                    el.remove();
                    // b)
                    const div = document.getElementById(`div-${i}`);
                    // c)
                    const form = renderTodoForm();
                    // d)
                    form.setAttribute("id", `todo-form-${i}`);
                    // e)
                    div.appendChild(form);

                    // 1. Na form nałóż event listener na submit
                    // W eventListener:
                    // 2. Wybierz todo input z właściwego formularza (this.childNodes) i ściągnij wartość (.value)
                    // 3. Wybierz wszystkie radio inputy z odpowiedniego formularza (this.getElementsByTagName), zrzutuj HTMLCollection na zwykły array, po czym usuń z niego pierwszy element (będzie to input text, my chcemy tylko radio) (.slice()), po czym metodą find znajdź input z atrybutem checked i ściągnij z niego wartość przy pomocy .value
                    // 4. Stwórz obiekt updates.
                    // 5. Przy pomocy bracket notation wrzuć do tego obiektu kategorie ściągniętą z radio inputów i todoText z inputu text
                    // 6. Wywołaj metodę update z obiektem updates jako argument.

                    // 1.
                    form.addEventListener("submit", function (event) {
                        event.preventDefault();
                        // 2.
                        const todoInput = this.childNodes[0].value; // this w eventList. odnosi się do el. do którego ten addEventListener jest podpięty, czyli this będzie mi wskazywać na ten form; childNodes - all node'y dzieci z forma 
                        // 3.
                        const category = [...this.getElementsByTagName("input")]
                            .slice(1, 5)
                            .find(el => el.checked).value; // wyciągnie tylko inputy z tego forma; slice wytnie mi od 2 do ostatniego elem i mi je zwróci;
                        console.log(todoInput, category);
                        // 4.
                        const updates = {};
                        // 5.
                        updates[`todos/${auth.currentUser.uid}/${Object.keys(data)[i]}`] = {
                            category,
                            todoInput
                        };
                        // 6.
                        update(ref(db), updates);
                    });
                })
            })

            const removeButtons = [...document.getElementsByClassName("remove-button")];
            removeButtons.forEach((el, i) => {
                el.addEventListener("click", function () {
                    // 1. usuń całego todosa, całe li
                    this.parentElement.parentElement.remove(); // to jest moje li, które usuwam
                    remove(ref(db, `todos/${auth.currentUser.uid}/${Object.keys(data)[i]}`));
                })
            })
        }
    });
}



