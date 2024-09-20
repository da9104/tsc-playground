"use strict";
// const btn = document.getElementById("btn")! // ! means it guarantees that btn is not null
const form = document.querySelector("#todoform");
const input = document.querySelector("#todoinput");
const list = document.querySelector("#todolist");
const todos = readTodos();
todos.forEach(createTodoElement);
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function handleSubmit(e) {
    e.preventDefault();
    const newTodoText = input.value.trim();
    if (newTodoText !== "") {
        const newTodo = {
            text: input.value,
            completed: false,
        };
    }
    createTodoElement(newTodo);
    todos.push(newTodo);
    saveTodos();
    input.value = "";
}
function createTodoElement(todo) {
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    newLI.append(todo.text, " ", checkbox);
    list === null || list === void 0 ? void 0 : list.append(newLI);
}
form.addEventListener("submit", handleSubmit);
//  (e) => {    
// e.preventDefault()
// console.log(input.value)
// input.value = ""
// }
// btn?.addEventListener("click", () => {
//     console.log(input.value)
//     input.value = ""
// })
// (<HTMLInputElement>input).value = "Hello"
// let mystery: unknown = "hi"
// const numChars = (mystery as string).length 
// Error: Property 'length' does not exist on type 'unknown'.
// "hello".replaceAll("l", "L")
// console.log("hello".replaceAll("l", "L"))
// console.dir(btn)
