// 1. Stwórz element <form> i nadaj mu id 'todo-form'
// 2. Stwórz element <input> i nadaj mu id 'todo-input'
// 3. Stwórz element <fieldset> i  nadaj mu id "todo-fieldset"
// 4. Stwórz element <legend> i nadaj mu textContent "Select a category"
// 5. Stwórz element <div> i nadaj mu id 'div-work'
// 6. Stwórz element <input>, nadaj mu type "radio", id "radio-work", name "category", value "work", checked "true"
// 7. Stwórz element <label>, nadaj mu atrybut for "radio-work", textContent "Work"
// 8. Do diva id 'div-work' (pkt 5) podpinacie radio inputa z pkt 6 i label z pkt 7
// 9. Stwórz element <div> i nadaj mu id 'div-life'
// 10. Stwórz element <input>, nadaj mu type "radio", id "radio-life", name "category", value "life"
// 11. Stwórz element <label>, nadaj mu atrybut for "radio-life", textContent "Life"
// 12. Do diva id 'div-life' (pkt 9) podpinacie radio inputa z pkt 10 i label z pkt 11
// Powtórz tyle razy żeby finalnie powstały 4 radio inputy z value Work, Life, Sport i Education
// 13. Stwórz element <button>, nadaj mu type "submit", klasę "todo-form-submit-button", textContent "Add todo"
// 14. Do fieldseta podpinacie elementy legend, divWork, divLife, divSport, divEducation
// 15. Do form podpinacie input (pkt 2), fieldset, submit button
// 16. Cały formularz zwracacie returnem

export default function () {
    // 1.
    const form = document.createElement("form");
    form.setAttribute("id", "todo-form");
    // 2.
    const todoInput = document.createElement("input");
    todoInput.setAttribute("id", "todo-input");
    // 3.
    const fieldset = document.createElement("fieldset");
    fieldset.setAttribute("id", "todo-fieldset");
    // 4.
    const legend = document.createElement("legend");
    legend.textContent = "Select a category";
    // 5.
    const divWork = document.createElement("div");
    divWork.setAttribute("id", "div-work");
    // 6.
    const inputWork = document.createElement("input");
    inputWork.setAttribute("type", "radio");
    inputWork.setAttribute("id", "radio-work");
    inputWork.setAttribute("name", "category");
    inputWork.setAttribute("value", "work");
    inputWork.setAttribute("checked", "true");
    // 7.
    const labelWork = document.createElement("label");
    labelWork.setAttribute("for", "radio-work");
    labelWork.textContent = "Work";
    // 8.
    divWork.appendChild(inputWork);
    divWork.appendChild(labelWork);
    // 9.
    const divLife = document.createElement("div");
    divLife.setAttribute("id", "div-life");
    // 10.
    const inputLife = document.createElement("input");
    inputLife.setAttribute("type", "radio");
    inputLife.setAttribute("id", "radio-life");
    inputLife.setAttribute("name", "category");
    inputLife.setAttribute("value", "life");
    // 11.
    const labelLife = document.createElement("label");
    labelLife.setAttribute("for", "radio-life");
    labelLife.textContent = "Life";
    // 12.
    divLife.appendChild(inputLife);
    divLife.appendChild(labelLife);

    const divSport = document.createElement("div");
    divSport.setAttribute("id", "div-sport");

    const inputSport = document.createElement("input");
    inputSport.setAttribute("type", "radio");
    inputSport.setAttribute("id", "radio-sport");
    inputSport.setAttribute("name", "category");
    inputSport.setAttribute("value", "sport");
    
    const labelSport = document.createElement("label");
    labelSport.setAttribute("for", "radio-sport");
    labelSport.textContent = "Sport";
    
    divSport.appendChild(inputSport);
    divSport.appendChild(labelSport);

    const divEdu = document.createElement("div");
    divEdu.setAttribute("id", "div-education");

    const inputEdu = document.createElement("input");
    inputEdu.setAttribute("type", "radio");
    inputEdu.setAttribute("id", "radio-education");
    inputEdu.setAttribute("name", "category");
    inputEdu.setAttribute("value", "education");
    
    const labelEdu = document.createElement("label");
    labelEdu.setAttribute("for", "radio-education");
    labelEdu.textContent = "Education";
    
    divEdu.appendChild(inputEdu);
    divEdu.appendChild(labelEdu);
    // 13.
    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("class", "todo-form-submit-button");
    submitButton.textContent = "Add todo";
    // 14.
    fieldset.appendChild(legend);
    fieldset.appendChild(divWork);
    fieldset.appendChild(divLife);
    fieldset.appendChild(divSport);
    fieldset.appendChild(divEdu);
    // 15.
    form.appendChild(todoInput);
    form.appendChild(fieldset);
    form.appendChild(submitButton);
    // 16.
    return form;
}