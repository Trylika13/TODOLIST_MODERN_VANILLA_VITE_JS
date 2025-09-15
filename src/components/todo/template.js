import "./styles.css";
export default function getTemplate(todo) {
  return `<li class="todo">${todo.content}</li>`;
}
